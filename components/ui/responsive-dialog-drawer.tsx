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
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent aria-describedby={undefined}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-6 px-6 pb-6">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
