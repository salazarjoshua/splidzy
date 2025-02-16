import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FriendTag } from "./friend-tag";
import { useStore } from "@/store/useStore";
import { Check, Trash } from "./icons";
import { Item, Friend } from "@/types";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import { Switch } from "./ui/switch";
import { useEffect } from "react";

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
  const [localItem, setLocalItem] = React.useState<Item | null>(null);
  const [selectAll, setSelectAll] = React.useState(true);

  useEffect(() => {
    if (open && item) {
      setLocalItem(item);
      setSelectAll(item.isAllFriends);
    }
  }, [item, open]);

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

  const toggleFriendAssignment = (friendId: string) => {
    if (!localItem) return;

    setLocalItem((prev) => {
      if (!prev) return null;

      const updatedAssignedTo = prev.assignedTo.includes(friendId)
        ? prev.assignedTo.filter((id) => id !== friendId)
        : [...prev.assignedTo, friendId];

      const isManuallyDeselecting = updatedAssignedTo.length !== friends.length;

      return {
        ...prev,
        assignedTo: updatedAssignedTo,
        isAllFriends: isManuallyDeselecting ? false : prev.isAllFriends,
      };
    });

    setSelectAll(
      (prev) => prev && friends.length === localItem?.assignedTo.length + 1,
    );
  };

  const handleSelectAllToggle = (checked: boolean) => {
    if (!localItem) return;

    setSelectAll(checked);
    setLocalItem({
      ...localItem,
      assignedTo: checked ? friends.map((friend) => friend.id) : [],
      isAllFriends: checked,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (localItem) {
      onItemChange(localItem);
      onOpenChange(false);
    }
  };

  return (
    <ResponsiveDialogDrawer
      title="Edit item"
      open={open}
      onOpenChange={onOpenChange}
    >
      <form onSubmit={handleSave} className="contents">
        <div className="grid grid-cols-[0.7fr_0.3fr] gap-2">
          <Input
            id="name"
            name="name"
            value={localItem?.name || ""}
            onChange={handleInputChange}
            placeholder="Enter item"
            maxLength={40}
          />
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

        <div className="flex items-center justify-between gap-16 space-y-0.5 text-sm">
          <div className="space-y-0.5 text-sm">
            <h3 className="font-semibold">Split by all</h3>
            <p className="text-gray-500">
              New friends will be added to the split automatically.
            </p>
          </div>
          <Switch checked={selectAll} onCheckedChange={handleSelectAllToggle} />
        </div>

        <div className="no-scrollbar -mx-6 -mb-2 -mt-4 flex gap-1.5 overflow-x-auto scroll-smooth px-6 py-2">
          {friends.map((friend) => (
            <FriendTag
              type="button"
              key={friend.id}
              onClick={() => toggleFriendAssignment(friend.id)}
              name={friend.name}
              color={friend.color}
              selected={localItem?.assignedTo.includes(friend.id)}
              friendTagVariant="select"
            />
          ))}
        </div>

        <div className="flex justify-end gap-2 border-t border-neutral-200 pt-6">
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
    </ResponsiveDialogDrawer>
  );
}
