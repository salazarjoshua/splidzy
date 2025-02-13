import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FriendTag } from "./friend-tag";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useStore } from "@/store/useStore";
import { Check, Trash } from "./icons";

interface Friend {
  id: number;
  name: string;
  color: "green" | "pink" | "purple" | "blue";
}

interface Item {
  id: number;
  name: string;
  price: number;
  assignedTo: number[];
}

interface EditItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: Item | null;
  friends: Friend[];
  onItemChange: (updatedItem: Item) => void;
}

export function EditItemDialog({
  open,
  onOpenChange,
  item,
  friends,
  onItemChange,
}: EditItemDialogProps) {
  const { removeItem } = useStore();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [localItem, setLocalItem] = React.useState<Item | null>(item);

  React.useEffect(() => {
    setLocalItem(item);
  }, [item]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (localItem) {
      setLocalItem({
        ...localItem,
        [e.target.name]:
          e.target.name === "price"
            ? Number.parseFloat(e.target.value)
            : e.target.value,
      });
    }
  };

  const toggleFriend = (friendId: number) => {
    if (localItem) {
      const newAssignedTo = localItem.assignedTo.includes(friendId)
        ? localItem.assignedTo.filter((id) => id !== friendId)
        : [...localItem.assignedTo, friendId];
      setLocalItem({
        ...localItem,
        assignedTo: newAssignedTo,
      });
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (localItem) {
      onItemChange(localItem);
      onOpenChange(false);
    }
  };

  const content = (
    <form onSubmit={handleSave} className="contents">
      <div className="space-y-6">
        <div className="grid grid-cols-[0.7fr_0.3fr] gap-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Edit Item Name
            </label>
            <Input
              id="name"
              name="name"
              value={localItem?.name || ""}
              onChange={handleInputChange}
              placeholder="Enter item"
              maxLength={40}
            />
          </div>
          <div>
            <label htmlFor="price" className="sr-only">
              Edit Price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={localItem?.price || ""}
              onChange={handleInputChange}
              placeholder="Price"
              min={1}
              max={1_000_000}
            />
          </div>
        </div>
        {friends.length > 0 && (
          <div className="space-y-4">
            <div className="space-y-0.5 text-sm">
              <h3 className="font-semibold">Assign to</h3>
              <p className="text-sm text-neutral-500">
                Skip selection to include everyone
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {friends.map((friend) => (
                <FriendTag
                  key={friend.id}
                  type="button"
                  onClick={() => toggleFriend(friend.id)}
                  name={friend.name}
                  selected={localItem?.assignedTo.includes(friend.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          onClick={() => {
            if (localItem) {
              removeItem(localItem.id);
              onOpenChange(false);
            }
          }}
          className="bg-red-50 text-red-500 hover:bg-red-100"
        >
          <Trash className="size-4" />
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-green-500 text-green-50 hover:bg-green-500/90"
        >
          <Check className="size-4" />
        </Button>
      </div>
    </form>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent aria-describedby={undefined}>
        <DrawerHeader>
          <DrawerTitle>Edit Item</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-6 px-6 pb-6">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
