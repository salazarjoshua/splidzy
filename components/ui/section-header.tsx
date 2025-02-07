import type * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  children,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex items-center gap-5 text-lg font-bold", className)}
      {...props}
    >
      {children}
    </div>
  );
}
