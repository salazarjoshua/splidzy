import * as React from "react";
import DashedUnderline from "./dashed-underline";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "peer flex h-12 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-base font-medium ring-offset-white file:border-0 file:bg-transparent file:text-sm file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute bottom-0.5 left-1/2 w-full -translate-x-1/2 px-3 text-neutral-200 peer-focus-visible:text-neutral-400 dark:peer-focus-visible:text-neutral-300">
          <DashedUnderline />
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
