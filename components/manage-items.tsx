"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FriendTagAvatar } from "./friend-tag";
import { EditItemDialog } from "@/components/edit-item-dialog";
import { useStore } from "@/store/useStore";
import type { Item } from "@/types";
import React from "react";
import DashedUnderline from "./ui/dashed-underline";
import Link from "next/link";
import { AddItems } from "./add-items";
import { formatCurrency } from "@/lib/utils";

export function ManageItems() {
  const { friends, items, editItem } = useStore();
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const currentItems = items;

  const total = currentItems.reduce((sum, item) => {
    const amount = item.price;
    return sum + amount;
  }, 0);

  const renderAssignedFriends = (
    isAllFriends: boolean,
    assignedTo: string[],
  ) => {
    if (isAllFriends) {
      return (
        <div className="flex items-center gap-1 text-neutral-600">
          <FriendTagAvatar
            name={"everyone"}
            className="size-7 border-2 border-white p-0 text-sm"
          />
          <span>Everyone</span>
        </div>
      );
    }

    const assignedFriends = isAllFriends
      ? friends
      : friends.filter((f) => assignedTo.includes(f.id));
    const displayedFriends = assignedFriends.slice(0, 3);
    const remainingCount = assignedFriends.length - 3;

    return (
      <div className="flex items-center gap-1">
        <div className="flex -space-x-1.5">
          {displayedFriends.map((friend) => (
            <FriendTagAvatar
              key={friend.id}
              name={friend.name}
              color={friend.color}
              className="size-7 border-2 border-white p-0 text-xs"
            />
          ))}
        </div>
        {remainingCount > 0 && (
          <span className="ml-1 text-sm">
            +{remainingCount} friend{remainingCount > 1 ? "s" : ""}
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full flex-col rounded-3xl border border-neutral-200 bg-white p-4">
        {currentItems.map((item, index) => (
          <div key={item.id}>
            <Button
              onClick={() => setEditingItem(item)}
              variant="secondary"
              className="relative h-auto w-full rounded-2xl bg-transparent p-4"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2 md:gap-8">
                  <h3 className="truncate">{item.name}</h3>
                  <div className="shrink-0">{formatCurrency(item.price)}</div>
                </div>
                <div className="flex items-center justify-between gap-8 font-normal text-neutral-500">
                  <div className="text-sm">
                    {renderAssignedFriends(item.isAllFriends, item.assignedTo)}
                  </div>
                  <div className="text-sm">
                    {formatCurrency(item.price / item.assignedTo.length)} each
                  </div>
                </div>
              </div>
            </Button>
            {index !== currentItems.length - 1 && (
              <div className="px-4 text-neutral-100">
                <DashedUnderline />
              </div>
            )}
          </div>
        ))}

        <div className={`${currentItems.length !== 0 && "mt-4"}`}>
          <AddItems />
        </div>
      </div>

      <Button asChild className="relative w-full">
        <Link href={"export"}>Split Bills - ({total})</Link>
      </Button>

      <EditItemDialog
        open={!!editingItem}
        onOpenChange={(open) => !open && setEditingItem(null)}
        item={editingItem}
        friends={friends}
        onItemChange={editItem}
      />
    </>
  );
}
