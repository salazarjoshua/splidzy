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
import { FriendTag, FriendTagAvatar, FriendTagName } from "./friend-tag";
import { useState } from "react";
import { checkValidInput } from "@/lib/validate-inputs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EditFriendPopoverProps {
  friend: Friend;
}

export function EditFriendPopover({ friend }: EditFriendPopoverProps) {
  const { removeFriend, editFriend } = useStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState(friend.name);
  const [isError, setIsError] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkValidInput(name, setIsError)) return;

    if (name.trim() && name !== friend.name) {
      editFriend(friend.id, name.trim());
    }
    setIsOpen(false);
  };

  return (
    <Popover
      open={isOpen}
      onOpenChange={(open) => {
        if (!open && name === friend.name) {
          setName(friend.name);
        }
        setIsOpen(open);
      }}
    >
      <PopoverTrigger asChild>
        <FriendTag friend={friend}>
          <FriendTagAvatar />
          <FriendTagName />
        </FriendTag>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-[256px] rounded-2xl p-2">
        <form onSubmit={handleSave} className="flex flex-col gap-2">
          <div className="flex-1 shrink-0">
            <label htmlFor="friend" className="sr-only">
              {"Edit friend's name"}
            </label>
            <Input
              id="friend"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setIsError(false);
              }}
              isError={isError}
              placeholder="Enter a friend's name"
              maxLength={24}
            />
          </div>
          <div className="flex items-center gap-2">
            {friend.id === "itzyitzy" ? (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      type="button"
                      className="bg-red-50 text-red-500 hover:bg-red-100 disabled:bg-neutral-100 disabled:text-neutral-300 disabled:opacity-100"
                      disabled
                    >
                      <Trash className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="text-xs">
                    {"can't delete urself bro"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                type="button"
                onClick={() => {
                  removeFriend(friend.id);
                  setIsOpen(false);
                }}
                variant={"destructive"}
              >
                <Trash className="size-4" />
              </Button>
            )}
            <Button
              type="submit"
              className="flex-1 bg-green-500 text-green-50 hover:bg-green-500/90"
            >
              <Check className="size-4" />
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
