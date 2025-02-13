"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { Plus } from "lucide-react";
import { FriendTag } from "./friend-tag";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import { Check } from "./icons";
import { Switch } from "./ui/switch";

export function AddItems() {
  const [isOpen, setIsOpen] = useState(false);
  const { friends, addItem } = useStore();
  const [selectAll, setSelectAll] = useState(true);

  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    assignedTo: friends.map((friend) => friend.id),
    isAllFriends: true,
  });

  useEffect(() => {
    if (isOpen) {
      setNewItem({
        name: "",
        price: "",
        assignedTo: friends.map((friend) => friend.id),
        isAllFriends: true,
      });
      setSelectAll(true);
    }
  }, [friends, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      addItem({
        name: newItem.name,
        price: Number.parseFloat(newItem.price),
        assignedTo: newItem.assignedTo,
        isAllFriends: selectAll,
      });

      setIsOpen(false);
    }
  };

  const toggleFriendAssignment = (friendId: string) => {
    setNewItem((prev) => {
      const updatedAssignedTo = prev.assignedTo.includes(friendId)
        ? prev.assignedTo.filter((id) => id !== friendId)
        : [...prev.assignedTo, friendId];

      setSelectAll(updatedAssignedTo.length === friends.length);

      return {
        ...prev,
        assignedTo: updatedAssignedTo,
        isAllFriends: updatedAssignedTo.length === friends.length,
      };
    });
  };

  const handleSelectAllToggle = (checked: boolean) => {
    setSelectAll(checked);
    setNewItem({
      ...newItem,
      assignedTo: checked ? friends.map((friend) => friend.id) : [],
      isAllFriends: checked,
    });
  };

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <>
      <Button
        className="flex h-auto w-full items-center justify-center gap-1.5 border-2 border-dashed bg-transparent px-1.5 py-3 font-semibold text-neutral-500 hover:bg-neutral-100"
        variant="secondary"
        onClick={() => setIsOpen(true)}
      >
        <Plus strokeWidth="3" size={16} />
        Add Item
      </Button>

      <ResponsiveDialogDrawer
        title="Add item"
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <form onSubmit={handleSubmit} className="contents">
          <div className="grid grid-cols-[0.7fr_0.3fr] gap-2">
            <Input
              id="item"
              name="item"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="Enter item"
              maxLength={40}
            />
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              placeholder="Price"
              min={1}
              max={1_000_000}
            />
          </div>

          <div className="flex items-center justify-between gap-16 space-y-0.5 text-sm">
            <div className="space-y-0.5 text-sm">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Assign to</h3>
                <Switch
                  checked={selectAll}
                  onCheckedChange={handleSelectAllToggle}
                />
              </div>
              <p className="text-gray-500">
                New friends will be assigned automatically if you include
                everyone.
              </p>
            </div>
          </div>

          <div className="no-scrollbar -mx-6 -mb-2 -mt-4 flex gap-1.5 overflow-x-auto scroll-smooth px-6 py-2">
            {friends.map((friend) => (
              <FriendTag
                type="button"
                key={friend.id}
                onClick={() => toggleFriendAssignment(friend.id)}
                name={friend.name}
                color={friend.color}
                selected={newItem.assignedTo.includes(friend.id)}
                friendTagVariant="select"
              />
            ))}
          </div>

          <div className="flex items-center justify-end gap-4 border-t border-neutral-200 pt-6">
            <Button
              type="submit"
              className="bg-green-500 text-green-50 hover:bg-green-500/90"
            >
              <Check className="size-4" />
              Add item
            </Button>
          </div>
        </form>
      </ResponsiveDialogDrawer>
    </>
  );
}
