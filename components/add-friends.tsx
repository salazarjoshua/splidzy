import React, { useCallback, useRef, useState } from "react";
import { useStore, colors } from "@/store/useStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import { Friend } from "@/types";
import { Minus } from "lucide-react";
import { FriendTag, FriendTagAvatar, FriendTagName } from "./friend-tag";
import { v4 as uuidv4 } from "uuid";
import { Check } from "./icons";
import { checkValidInput } from "@/lib/validate-inputs";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const AddFriends = () => {
  const { friends, addFriend } = useStore();
  const [newFriend, setNewFriend] = useState("");
  const [localFriends, setLocalFriends] = useState<Friend[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const friendsListRef = useRef<HTMLDivElement>(null);
  const [isError, setIsError] = useState(false);

  const addLocalFriend = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!checkValidInput(newFriend, setIsError)) return;

      const newFriendObj: Friend = {
        id: uuidv4(),
        name: newFriend,
        color: colors[(friends.length + localFriends.length) % colors.length],
      };
      setLocalFriends((prev) => [...prev, newFriendObj]);
      setNewFriend("");

      setTimeout(() => {
        if (friendsListRef.current) {
          friendsListRef.current.scrollTo({
            left: friendsListRef.current.scrollWidth,
            behavior: "smooth",
          });
        }
      }, 50);
    },
    [newFriend, friends.length, localFriends.length],
  );

  const removeLocalFriend = (id: string) => {
    setLocalFriends((prev) => prev.filter((friend) => friend.id !== id));
  };

  const handleSave = useCallback(() => {
    localFriends.forEach((friend) => {
      if (!friends.some((f) => f.name === friend.name)) {
        addFriend(friend.name);
      }
    });
    setLocalFriends([]);
    setIsOpen(false);
  }, [localFriends, friends, addFriend]);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <>
      <Button variant="secondary" size={"lg"} onClick={() => setIsOpen(true)}>
        <Image src={"/tossface/friends.svg"} alt="" width={24} height={24} />
        Add Friends
      </Button>

      <ResponsiveDialogDrawer
        title="Add friends"
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <>
          <form onSubmit={addLocalFriend} className="flex gap-2">
            <label htmlFor="friend" className="sr-only">
              {"Enter a friend's name"}
            </label>
            <Input
              id="friend"
              value={newFriend}
              onChange={(e) => {
                setNewFriend(e.target.value);
                setIsError(false);
              }}
              placeholder="Enter a friend's name"
              className="flex-grow"
              maxLength={24}
              isError={isError}
            />
            <Button type="submit" variant={"secondary"}>
              Add
            </Button>
          </form>

          <ScrollArea ref={friendsListRef} className="-mx-6 -my-2 [&>div]:py-2">
            <div className="flex gap-1.5 px-6">
              {localFriends.map((friend) => (
                <FriendTag
                  friend={friend}
                  onClick={() => removeLocalFriend(friend.id)}
                >
                  <FriendTagAvatar>
                    <div className="absolute left-0 top-0 flex size-5 -translate-x-1 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors group-hover:bg-red-500 group-hover:text-white [&_svg]:size-3">
                      <Minus strokeWidth={3} />
                    </div>
                  </FriendTagAvatar>
                  <FriendTagName />
                </FriendTag>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="flex items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <div className="text-sm font-medium text-neutral-400">
              {localFriends.length > 0 && (
                <p>
                  Adding {localFriends.length} friend
                  {localFriends.length > 1 ? "s" : ""}
                </p>
              )}
            </div>
            <Button
              onClick={handleSave}
              className="bg-green-500 text-green-50 hover:bg-green-500/90"
              disabled={localFriends.length === 0}
            >
              <Check className="size-4" />
              Confirm
            </Button>
          </div>
        </>
      </ResponsiveDialogDrawer>
    </>
  );
};

export default AddFriends;
