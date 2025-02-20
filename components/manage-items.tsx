"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FriendTagAvatar } from "./friend-tag";
import { EditItemDialog } from "@/components/edit-item-dialog";
import { useStore } from "@/store/useStore";
import type { Item } from "@/types";
import React from "react";
import DashedUnderline from "./ui/dashed-underline";
import { AddItems } from "./add-items";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Check, Loader } from "./icons";

export function ManageItems() {
  const router = useRouter();
  const { friends, items, editItem } = useStore();
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleClick = (href: string) => {
    router.push(href);
  };

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
          <Image src="/bff.webp" width={28} height={28} alt="" />
          <span>{`Everyone's in! `}</span>
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
          <span className="text-sm">+{remainingCount} more</span>
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

      <Button
        onClick={() => handleClick("export")}
        className="h-20 w-full justify-between rounded-3xl px-6 disabled:opacity-100"
        disabled={friends.length < 2 || currentItems.length < 2}
      >
        <div className="text-2xl group-disabled:opacity-50">Split Bills</div>
        {friends.length < 2 || currentItems.length < 2 ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-1 text-xs font-semibold text-neutral-400">
              {friends.length < 2 ? (
                <Loader className="duration-[3s] animate-spin-slow size-3" />
              ) : (
                <Check className="w-3 text-green-500" />
              )}
              Add at least <span className="text-white">1 friend</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-neutral-400">
              {currentItems.length < 2 ? (
                <Loader className="duration-[3s] animate-spin-slow size-3" />
              ) : (
                <Check className="w-3 text-green-500" />
              )}
              Add at least <span className="text-white">2 items</span>
            </div>
          </div>
        ) : (
          <>
            <div className="text-right font-medium leading-tight">
              <span className="text-xs text-neutral-400">TOTAL</span> <br />
              {formatCurrency(total)}
            </div>
          </>
        )}
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
