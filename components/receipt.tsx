"use client";

import { useState } from "react";
import { Stars, Download, ReceiptLong, Check } from "./icons";
import { X } from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/button";
import { FriendTagAvatar } from "./friend-tag";
import { EditItemDialog } from "@/components/edit-item-dialog";
import { toPng } from "html-to-image";
import { useStore } from "@/store/useStore";
import type { Item } from "@/types";
import React from "react";
import { FriendsListDialog } from "@/components/friends-list-dialog";
import DashedUnderline from "./ui/dashed-underline";
import Link from "next/link";

export function Receipt() {
  const { friends, items, editItem } = useStore();
  const [selectedFriend, setSelectedFriend] = useState("all");
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const currentItems =
    selectedFriend === "all"
      ? items
      : items.filter(
          (item) =>
            item.assignedTo.length === 0 ||
            item.assignedTo.includes(Number.parseInt(selectedFriend)),
        );

  const total = currentItems.reduce((sum, item) => {
    const amount =
      selectedFriend === "all"
        ? item.price
        : item.price / (item.assignedTo.length || friends.length);
    return sum + amount;
  }, 0);

  const renderAssignedFriends = (assignedTo: number[]) => {
    if (assignedTo.length === 0) {
      return (
        <div className="flex items-center gap-1 text-neutral-600">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white bg-yellow-100 text-sm">
            <Stars className="size-3 text-yellow-400" />
          </div>
          <span>Everyone</span>
        </div>
      );
    }

    const assignedFriends = friends.filter((f) => assignedTo.includes(f.id));
    const displayedFriends = assignedFriends.slice(0, 3);
    const remainingCount = assignedFriends.length - 3;

    return (
      <div className="flex items-center gap-1">
        <div className="flex -space-x-1.5">
          {displayedFriends.map((friend) => (
            <FriendTagAvatar
              key={friend.id}
              initial={friend.name}
              color={friend.color}
              className="border-2 border-white"
            />
          ))}
        </div>
        {remainingCount > 0 && (
          <span className="ml-1 text-sm text-neutral-600">
            +{remainingCount} friend{remainingCount > 1 ? "s" : ""}
          </span>
        )}
      </div>
    );
  };

  const selectedFriendData = friends.find(
    (f) => f.id.toString() === selectedFriend,
  );

  return (
    <main className="flex max-w-lg flex-col gap-4 md:w-full">
      <div className="w-full rounded-3xl border border-neutral-200 bg-white p-6">
        {currentItems.length > 0 && (
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-center text-2xl font-bold">Receipt</h2>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="withIcon"
                onClick={() => setDialogOpen(true)}
              >
                {selectedFriend === "all" ? (
                  <>
                    <div className="flex size-5 items-center justify-center rounded-full bg-yellow-100 text-white">
                      <Stars className="size-4 text-yellow-400" />
                    </div>
                    <span className="max-w-[24ch] truncate">
                      Choose a Friend
                    </span>
                  </>
                ) : selectedFriendData ? (
                  <>
                    <div className="flex size-5 items-center justify-center rounded-full bg-yellow-50 text-white">
                      <FriendTagAvatar
                        initial={selectedFriendData.name}
                        color={selectedFriendData.color}
                        className="h-6 w-6"
                      />
                    </div>
                    <span className="max-w-[24ch] truncate">
                      {selectedFriendData.name}
                    </span>
                  </>
                ) : null}
              </Button>
              {selectedFriend !== "all" && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setSelectedFriend("all")}
                  className="text-red-500 hover:text-red-500"
                >
                  <X size={12} strokeWidth={3} />
                </Button>
              )}
            </div>
          </div>
        )}

        {currentItems.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center gap-1 py-12 text-center">
            <ReceiptLong className="w-16" />
            <div>
              <h2>No items yet</h2>
              <p className="font-medium text-neutral-500">
                <span className="text-neutral-500">
                  Is this what financial freedom feels like?
                </span>
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-1">
              {currentItems.map((item) => (
                <Button
                  onClick={() => setEditingItem(item)}
                  key={item.id}
                  variant="secondary"
                  className="relative h-auto w-full p-4"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 md:gap-8">
                      <h3 className="max-w-[32ch] truncate">{item.name}</h3>
                      <div className="min-w-6 flex-1">
                        <DashedUnderline />
                      </div>
                      <span>
                        {(selectedFriend === "all"
                          ? item.price
                          : item.price /
                            (item.assignedTo.length || friends.length)
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                      <div className="text-sm">
                        {renderAssignedFriends(item.assignedTo)}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}

              <div className="px-4 pt-6">
                <div className="flex items-center justify-between gap-8 font-bold">
                  <span>Total</span>
                  <div className="flex-1">
                    <DashedUnderline />
                  </div>
                  <span>
                    {total.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Button asChild className="relative w-full">
        <Link href={"export"}>
          <ButtonIcon>
            <Download />
          </ButtonIcon>
          See summary
        </Link>
      </Button>

      <EditItemDialog
        open={!!editingItem}
        onOpenChange={(open) => !open && setEditingItem(null)}
        item={editingItem}
        friends={friends}
        onItemChange={editItem}
      />
      <FriendsListDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSelect={(friendId) => {
          setSelectedFriend(friendId);
          setDialogOpen(false);
        }}
        selectedFriend={selectedFriend}
      />
    </main>
  );
}
