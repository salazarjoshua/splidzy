"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FriendTagProvider, FriendTagAvatar } from "./friend-tag";
import { EditItemDialog } from "@/components/edit-expense-dialog";
import { useStore } from "@/store/useStore";
import type { Item } from "@/types";
import React from "react";
import DashedUnderline from "./ui/dashed-underline";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { AddExpenseButton } from "./add-expense-button";

export function ManageItems() {
  const { friends, items, editItem } = useStore();
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const currentItems = items;

  const renderAssignedFriends = (
    isAllFriends: boolean,
    assignedTo: string[],
  ) => {
    if (isAllFriends) {
      return (
        <div className="flex h-[28px] items-center gap-0.5 text-neutral-600">
          <Image src="/tossface/pie.svg" width={20} height={20} alt="" />
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
            <FriendTagProvider key={friend.id} friend={friend}>
              <FriendTagAvatar className="size-7 border-2 border-white p-0 text-xs" />
            </FriendTagProvider>
          ))}
        </div>
        {remainingCount > 0 && (
          <span className="text-sm">+{remainingCount} more</span>
        )}
      </div>
    );
  };

  if (currentItems.length === 0)
    return (
      <div className="flex min-h-full flex-1 flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white p-4 text-center text-sm font-medium">
        <div className="mb-2 flex gap-0.5">
          <Image
            src={"/tossface/spaghetti.svg"}
            alt=""
            width={18}
            height={18}
          />
          <Image src={"/tossface/disco.svg"} alt="" width={18} height={18} />
          <Image src={"/tossface/dizzy.svg"} alt="" width={18} height={18} />
          <Image src={"/tossface/beach.svg"} alt="" width={18} height={18} />
        </div>
        <h2 className="mb-2.5 text-neutral-500">
          All expenses will appear right here.
        </h2>
        <AddExpenseButton variant="link" className="h-auto p-0">
          + Add Expense
        </AddExpenseButton>
      </div>
    );

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col rounded-3xl border border-neutral-200 bg-white p-4 pt-2">
        {currentItems.map((item, index) => (
          <div key={item.id} className="-mx-2">
            <Button
              onClick={() => setEditingItem(item)}
              variant="secondary"
              className="relative h-auto w-full rounded-2xl bg-transparent px-4 py-3"
            >
              <div className="w-full flex-1">
                <div className="flex items-center justify-between gap-2 md:gap-8">
                  <h3 className="flex-1 truncate text-left">{item.name}</h3>
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
      </div>

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
