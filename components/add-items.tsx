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
import {
  checkValidInput,
  validateFriends,
  validatePrice,
} from "@/lib/validate-inputs";
import { cn } from "@/lib/utils";

export function AddItems() {
  const [isOpen, setIsOpen] = useState(false);
  const { friends, addItem } = useStore();
  const [selectAll, setSelectAll] = useState(true);
  const [nameIsError, setNameIsError] = useState(false);
  const [priceIsError, setPriceIsError] = useState(false);
  const [friendsIsError, setFriendsIsError] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "",
    price: null as number | null,
    assignedTo: friends.map((friend) => friend.id),
    isAllFriends: true,
  });

  useEffect(() => {
    if (isOpen) {
      setNewItem({
        name: "",
        price: null as number | null,
        assignedTo: friends.map((friend) => friend.id),
        isAllFriends: true,
      });
      setSelectAll(true);
      setFriendsIsError(false);
    }
  }, [friends, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = checkValidInput(newItem.name, setNameIsError);
    const isPriceValid = validatePrice(newItem.price ?? 0, setPriceIsError);
    const isFriendsValid = validateFriends(
      newItem.assignedTo,
      setFriendsIsError,
    );

    if (!isNameValid || !isPriceValid || !isFriendsValid) return;

    if (newItem.name && newItem.price) {
      addItem({
        name: newItem.name,
        price: newItem.price,
        assignedTo: newItem.assignedTo,
        isAllFriends: selectAll,
      });

      setIsOpen(false);
    }

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  const toggleFriendAssignment = (friendId: string) => {
    setNewItem((prev) => {
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
      (prev) => prev && friends.length === newItem.assignedTo.length + 1,
    );

    setFriendsIsError(false);
  };

  const handleSelectAllToggle = (checked: boolean) => {
    setSelectAll(checked);
    setNewItem((prev) => ({
      ...prev,
      assignedTo: checked ? friends.map((friend) => friend.id) : [],
      isAllFriends: checked,
    }));
  };

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <>
      <Button
        className="flex h-20 w-full items-center justify-center gap-1.5 border-2 border-dashed px-1.5 py-3 font-semibold text-neutral-500 hover:text-neutral-900"
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
              onChange={(e) => {
                setNewItem({ ...newItem, name: e.target.value });
                setNameIsError(false);
              }}
              isError={nameIsError}
              placeholder="Enter item"
              maxLength={40}
            />
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              inputMode="numeric"
              value={newItem.price ?? ""}
              onChange={(e) => {
                const value = e.target.valueAsNumber;
                setNewItem({ ...newItem, price: isNaN(value) ? null : value });
                setPriceIsError(false);
              }}
              isError={priceIsError}
              placeholder="Price"
              min={1}
              max={1_000_000}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5 text-sm">
              <h3 className="font-semibold">Include all friends</h3>
              <p className="text-gray-500">
                New friends will be added to the split automatically.
              </p>
            </div>
            <Switch
              checked={selectAll}
              onCheckedChange={handleSelectAllToggle}
            />
          </div>

          <div
            className={cn(
              "-mx-6 -mb-2 -mt-4 overflow-x-hidden transition-colors",
              friendsIsError && "bg-red-50/75",
            )}
          >
            <div
              className={cn(
                "no-scrollbar flex gap-1.5 overflow-x-auto scroll-smooth px-6 py-2",
                friendsIsError && "animate-shake",
              )}
            >
              {friends.map((friend) => (
                <FriendTag
                  type="button"
                  key={friend.id}
                  onClick={() => toggleFriendAssignment(friend.id)}
                  name={friend.name}
                  color={friend.color}
                  selected={newItem.assignedTo.includes(friend.id)}
                  friendTagVariant="select"
                  className="bg-transparent"
                />
              ))}
            </div>
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
