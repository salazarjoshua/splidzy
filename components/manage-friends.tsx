"use client";

import React from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button, ButtonIcon } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { EditFriendPopover } from "@/components/edit-friend-popover";
import { useStore } from "@/store/useStore";
import { Star } from "./icons";

export function ManageFriends() {
  const { friends, addFriend } = useStore();
  const [newFriend, setNewFriend] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFriend.trim()) {
      addFriend(newFriend);
      setNewFriend("");
    }
  };

  return (
    <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6">
      <SectionHeader>
        <Star />
        <h2>Manage friends</h2>
      </SectionHeader>
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="friend" className="sr-only">
            {"Enter friend's name"}
          </label>
          <Input
            id="friend"
            value={newFriend}
            onChange={(e) => setNewFriend(e.target.value)}
            placeholder="Enter friend's name"
            className="flex-grow"
            maxLength={24}
          />
          <Button type="submit" className="relative">
            Add
            <ButtonIcon>
              <Plus strokeWidth="3" />
            </ButtonIcon>
          </Button>
        </form>
        <div className="flex flex-wrap gap-2">
          {friends.map((friend) => (
            <div key={friend.id}>
              <EditFriendPopover friend={friend} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
