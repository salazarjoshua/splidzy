import { useState } from "react";
import { AddExpenseDialog } from "./add-expense-dialog";
import { Button, type ButtonProps } from "@/components/ui/button";

export function AddExpenseButton({ children, onClick, ...props }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        {...props}
        onClick={(e) => {
          setIsOpen(true);
          onClick?.(e);
        }}
      >
        {children}
      </Button>
      <AddExpenseDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
