import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { Minus } from "lucide-react";
import { Check } from "./icons";

const getInitial = (name: string) => {
  const match = name
    .trim()
    .split(/\s+/)
    .map((word) => word.match(/[a-zA-ZÀ-ÖØ-öø-ÿ]/)?.[0])
    .filter(Boolean);

  return match.length > 1
    ? match[0]!.toUpperCase() + match[1]!.toUpperCase()
    : match[0]?.toUpperCase() || "😗";
};

const colorStyles = {
  yellow: "bg-yellow-200 text-yellow-900",
  lime: "bg-lime-200 text-lime-900",
  lavender: "bg-purple-200 text-purple-900",
  sky: "bg-blue-200 text-blue-900",
  peach: "bg-orange-200 text-orange-900",
  rose: "bg-rose-200 text-rose-900",
} as const;

type FriendTagVariant = "default" | "delete" | "select";

interface FriendTagProps extends Omit<ButtonProps, "variant"> {
  selected?: boolean;
  color?: keyof typeof colorStyles;
  name: string;
  friendTagVariant?: FriendTagVariant;
}

interface FriendTagAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  selected?: boolean;
  color?: keyof typeof colorStyles;
  variant?: FriendTagVariant;
}

export const FriendTag = React.forwardRef<HTMLButtonElement, FriendTagProps>(
  (
    {
      selected,
      color = "yellow",
      name,
      friendTagVariant = "default",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "flex h-auto w-16 flex-col items-center justify-center gap-1.5 border-0 px-1.5 py-1 font-medium hover:bg-transparent",
          className,
        )}
        {...props}
      >
        <FriendTagAvatar
          name={name}
          color={color}
          selected={selected}
          variant={friendTagVariant}
        />
      </Button>
    );
  },
);

FriendTag.displayName = "FriendTag";

export function FriendTagAvatar({
  name,
  selected,
  color = "yellow",
  variant = "default",
  className,
  ...props
}: FriendTagAvatarProps) {
  return (
    <>
      <div
        className={cn(
          "relative size-16 shrink-0 rounded-full border-2 border-transparent p-0.5",
          variant === "select" && "border-neutral-100",
          selected && "border-green-500 text-green-100",
        )}
      >
        <div
          className={cn(
            "flex size-full items-center justify-center rounded-full text-lg font-bold transition-colors",
            colorStyles[color],
            className,
          )}
          {...props}
        >
          {getInitial(name)}
        </div>

        {variant === "delete" && (
          <div className="absolute left-0 top-0 flex size-5 -translate-x-1 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors group-hover:bg-red-500 group-hover:text-white [&_svg]:size-3">
            <Minus strokeWidth={3} />
          </div>
        )}

        {variant === "select" && (
          <div
            className={cn(
              "absolute bottom-0 right-0 flex size-5 translate-x-1 items-center justify-center rounded-full border-2 border-neutral-100 bg-white text-white transition-transform [&_svg]:size-5",
              selected ? "border-white bg-white text-green-500" : "bg-white",
            )}
          >
            {selected && <Check className="size-4" />}
          </div>
        )}
      </div>
      <span className="w-full truncate text-sm">{name}</span>
    </>
  );
}
