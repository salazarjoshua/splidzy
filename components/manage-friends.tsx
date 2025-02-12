"use client";

import React from "react";
import { EditFriendPopover } from "@/components/edit-friend-popover";
import { useStore } from "@/store/useStore";
import AddFriends from "./add-friends";

export function ManageFriends() {
  const { friends } = useStore();

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white px-4 py-2">
      <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 py-2">
        <AddFriends />
        {friends.map((friend) => (
          <div key={friend.id}>
            <EditFriendPopover friend={friend} />
          </div>
        ))}
      </div>
    </div>
  );
}
