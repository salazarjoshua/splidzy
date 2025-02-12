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
    default: "bg-green-100 text-green-500 group-hover:bg-green-200",
  },
  pink: {
    selected: "bg-pink-500 text-pink-100",
    default: "bg-pink-100 text-pink-500 group-hover:bg-pink-200",
  },
  purple: {
    selected: "bg-purple-500 text-purple-100",
    default: "bg-purple-100 text-purple-500 group-hover:bg-purple-200",
  },
  blue: {
    selected: "bg-blue-500 text-blue-100",
    default: "bg-blue-100 text-blue-500 group-hover:bg-blue-200",
  },
};

interface FriendTagProps extends ButtonProps {
  selected?: boolean;
  color?: "green" | "pink" | "purple" | "blue";
  name: string;
}

interface FriendTagAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  selected?: boolean;
  color?: "green" | "pink" | "purple" | "blue";
}

export const FriendTag = React.forwardRef<HTMLButtonElement, FriendTagProps>(
  ({ selected, color = "blue", name, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "flex h-auto w-16 flex-col items-center justify-center gap-1.5 border-0 px-1.5 py-1 font-medium hover:bg-transparent",
          selected && "bg-neutral-900 text-white hover:bg-neutral-900/90",
          className,
        )}
        {...props}
      >
        <FriendTagAvatar name={name} color={color} selected={selected} />
      </Button>
    );
  },
);

FriendTag.displayName = "FriendTag";

export function FriendTagAvatar({
  name,
  selected,
  color = "blue",
  className,
  ...props
}: FriendTagAvatarProps) {
  return (
    <>
      <div
        className={cn(
          "flex size-16 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-colors",
          colorStyles[color][selected ? "selected" : "default"],
          className,
        )}
        {...props}
      >
        {getInitial(name)}
      </div>
      <span className={cn("w-full truncate text-sm", selected && "text-white")}>
        {name}
      </span>
    </>
  );
}
