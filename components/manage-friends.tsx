"use client";

import React from "react";
import { EditFriendPopover } from "@/components/edit-friend-popover";
import { useStore } from "@/store/useStore";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function ManageFriends() {
  const { friends } = useStore();

  return (
    <ScrollArea className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white">
      <div className="flex gap-1.5 p-4">
        {friends.map((friend) => (
          <div key={friend.id}>
            <EditFriendPopover friend={friend} />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
