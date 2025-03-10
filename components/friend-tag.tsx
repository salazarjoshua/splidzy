import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import Image from "next/image";

const colorStyles = {
  yellow: "bg-yellow-200 text-yellow-900",
  lime: "bg-lime-200 text-lime-900",
  lavender: "bg-purple-200 text-purple-900",
  sky: "bg-blue-200 text-blue-900",
  peach: "bg-orange-200 text-orange-900",
  rose: "bg-rose-200 text-rose-900",
} as const;

const getInitial = (name: string) => {
  const match = name
    .trim()
    .split(/\s+/)
    .map((word) => word.match(/[a-zA-ZÀ-ÖØ-öø-ÿ]/)?.[0])
    .filter(Boolean);
  return match.length > 1
    ? match[0]!.toUpperCase() + match[1]!.toUpperCase()
    : match[0]?.toUpperCase() || (
        <Image
          src="/tossface/cat.svg"
          alt=""
          width={24}
          height={24}
          className="w-4/5 max-w-6"
        />
      );
};

export interface Friend {
  id: string;
  name: string;
  color: keyof typeof colorStyles;
}

interface FriendTagContextValue {
  friend: Friend;
}

const FriendTagContext = React.createContext<FriendTagContextValue | undefined>(
  undefined,
);

export interface FriendTagProviderProps {
  friend: Friend;
  children: React.ReactNode;
}

export const FriendTagProvider: React.FC<FriendTagProviderProps> = ({
  friend,
  children,
}) => (
  <FriendTagContext.Provider value={{ friend }}>
    {children}
  </FriendTagContext.Provider>
);

export interface FriendTagProps extends Omit<ButtonProps, "variant"> {
  friend: Friend;
  className?: string;
}

export const FriendTag = React.forwardRef<HTMLButtonElement, FriendTagProps>(
  ({ friend, className, children, ...props }, ref) => {
    return (
      <FriendTagProvider friend={friend}>
        <Button
          ref={ref}
          variant="outline"
          className={cn(
            "flex h-auto w-14 flex-col items-center justify-center gap-0.5 border-0 p-0 font-medium hover:bg-transparent",
            className,
          )}
          {...props}
        >
          {children}
        </Button>
      </FriendTagProvider>
    );
  },
);
FriendTag.displayName = "FriendTag";

export interface FriendTagAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  friend?: Friend;
  name?: string;
  color?: keyof typeof colorStyles;
  className?: string;
}

export const FriendTagAvatar: React.FC<FriendTagAvatarProps> = ({
  name: propName,
  color: propColor,
  className,
  children,
  ...props
}) => {
  const context = React.useContext(FriendTagContext);
  const friend = context?.friend;

  const name = propName || friend?.name || "";
  const color = propColor || friend?.color || "yellow";

  return (
    <div
      className={cn(
        "relative size-14 shrink-0 rounded-full border-2 border-transparent p-0.5 font-bold",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex size-full items-center justify-center rounded-full transition-colors",
          colorStyles[color],
        )}
      >
        {getInitial(name)}
      </div>
      {children}
    </div>
  );
};

export interface FriendTagNameProps
  extends React.HTMLAttributes<HTMLDivElement> {
  friend?: Friend;
  text?: string;
}

export const FriendTagName: React.FC<FriendTagNameProps> = ({
  text,
  className,
  ...props
}) => {
  const context = React.useContext(FriendTagContext);
  const friend = context?.friend;

  const displayText = text || friend?.name || "";

  return (
    <div
      className={cn("w-full text-center text-sm font-medium", className)}
      {...props}
    >
      <p className="truncate">{displayText}</p>
    </div>
  );
};
