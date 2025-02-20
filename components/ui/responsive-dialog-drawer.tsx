import { X } from "lucide-react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ResponsiveDialogDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function ResponsiveDialogDrawer({
  open,
  onOpenChange,
  title,
  children,
}: ResponsiveDialogDrawerProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={onOpenChange} repositionInputs={false}>
      <DrawerContent aria-describedby={undefined}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-6 px-6 pb-6">{children}</div>

        <Button
          variant={"secondary"}
          className="absolute right-6 top-8 size-8 rounded-full bg-neutral-100 p-0 [&_svg]:size-4"
          onClick={() => onOpenChange(false)}
        >
          <X
            strokeWidth={3}
            className="text-neutral-500 transition-colors group-hover:text-neutral-700"
          />
        </Button>
      </DrawerContent>
    </Drawer>
  );
}
