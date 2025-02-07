"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button, ButtonIcon } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { useStore } from "@/store/useStore";
import { Receipt } from "./icons";
import { Plus } from "lucide-react";
import { FriendTag } from "./friend-tag";

export function AddItems() {
  const { friends, addItem } = useStore();
  const [newItem, setNewItem] = React.useState({
    name: "",
    price: "",
    assignedTo: [] as number[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      addItem({
        name: newItem.name,
        price: Number.parseFloat(newItem.price),
        assignedTo: newItem.assignedTo,
      });
      setNewItem({ name: "", price: "", assignedTo: [] });
    }
  };

  const toggleFriendAssignment = (friendId: number) => {
    setNewItem((prev) => {
      const isAssigned = prev.assignedTo.includes(friendId);
      return {
        ...prev,
        assignedTo: isAssigned
          ? prev.assignedTo.filter((id) => id !== friendId)
          : [...prev.assignedTo, friendId],
      };
    });
  };

  return (
    <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6">
      <SectionHeader>
        <Receipt />
        <h2>Add items</h2>
      </SectionHeader>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-[0.7fr_0.3fr] gap-2">
          <div>
            <label htmlFor="item" className="sr-only">
              Item Name
            </label>
            <Input
              id="item"
              name="item"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="Enter item"
              maxLength={40}
            />
          </div>
          <div>
            <label htmlFor="price" className="sr-only">
              Price
            </label>
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
                  type="button"
                  key={friend.id}
                  onClick={() => toggleFriendAssignment(friend.id)}
                  name={friend.name}
                  color={friend.color}
                  selected={newItem.assignedTo.includes(friend.id)}
                />
              ))}
            </div>
          </div>
        )}
        <Button type="submit" className="relative w-full">
          Add Item
          <ButtonIcon>
            <Plus strokeWidth="3" />
          </ButtonIcon>
        </Button>
      </form>
    </div>
  );
}
