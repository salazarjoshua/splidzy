import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

const getInitial = (name: string) => {
  const match = name.trim().match(/[a-zA-ZÀ-ÖØ-öø-ÿ]/);
  return match ? match[0].toUpperCase() : "?";
};

const colorStyles = {
  green: {
    selected: "bg-green-500 text-green-100",
    default: "bg-green-100 text-green-500",
  },
  pink: {
    selected: "bg-pink-500 text-pink-100",
    default: "bg-pink-100 text-pink-500",
  },
  purple: {
    selected: "bg-purple-500 text-purple-100",
    default: "bg-purple-100 text-purple-500",
  },
  blue: {
    selected: "bg-blue-500 text-blue-100",
    default: "bg-blue-100 text-blue-500",
  },
};

interface FriendTagProps extends ButtonProps {
  selected?: boolean;
  color?: "green" | "pink" | "purple" | "blue";
  name: string;
}

interface FriendTagAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  initial: string;
  selected?: boolean;
  color?: "green" | "pink" | "purple" | "blue";
}

export const FriendTag = React.forwardRef<HTMLButtonElement, FriendTagProps>(
  ({ selected, color = "blue", name, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        size="withIcon"
        className={cn(
          "flex items-center gap-2 rounded-full border-0 bg-neutral-50 p-1 pr-3 transition-none",
          selected && "bg-neutral-900 text-white hover:bg-neutral-900/90",
          className,
        )}
        {...props}
      >
        <FriendTagAvatar initial={name} color={color} selected={selected} />
        <span className={cn("text-sm font-medium", selected && "text-white")}>
          {name}
        </span>
      </Button>
    );
  },
);

FriendTag.displayName = "FriendTag";

export function FriendTagAvatar({
  initial,
  selected,
  color = "blue",
  className,
  ...props
}: FriendTagAvatarProps) {
  return (
    <div
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
        colorStyles[color][selected ? "selected" : "default"],
        className,
      )}
      {...props}
    >
      {getInitial(initial)}
    </div>
  );
}
