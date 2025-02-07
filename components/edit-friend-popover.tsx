"use client";

import * as React from "react";
import { Trash, Check } from "./icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useStore } from "@/store/useStore";
import type { Friend } from "@/types";
import { FriendTag } from "./friend-tag";

interface EditFriendPopoverProps {
  friend: Friend;
}

export function EditFriendPopover({ friend }: EditFriendPopoverProps) {
  const { removeFriend, editFriend } = useStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState(friend.name);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && name !== friend.name) {
      editFriend(friend.id, name.trim());
    }
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <FriendTag name={friend.name} color={friend.color} />
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-xs rounded-2xl p-2">
        <form onSubmit={handleSave} className="flex gap-2">
          <Button
            type="button"
            onClick={() => {
              removeFriend(friend.id);
              setIsOpen(false);
            }}
            className="bg-red-50 text-red-500 hover:bg-red-100"
          >
            <Trash className="size-4" />
          </Button>
          <div className="flex-1 shrink-0">
            <label htmlFor="friend" className="sr-only">
              {"Edit friend's name"}
            </label>
            <Input
              id="friend"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter friend's name"
              maxLength={24}
            />
          </div>
          <Button
            type="submit"
            className="bg-green-500 text-green-50 hover:bg-green-500/90"
          >
            <Check className="size-4" />
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
