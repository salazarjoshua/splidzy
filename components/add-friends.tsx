import React, { useCallback, useRef, useState } from "react";
import { useStore, colors } from "@/store/useStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import { Friend } from "@/types";
import { FriendTag } from "./friend-tag";
import { v4 as uuidv4 } from "uuid";
import { Check } from "./icons";

const AddFriends = () => {
  const { friends, addFriend } = useStore();
  const [newFriend, setNewFriend] = useState("");
  const [localFriends, setLocalFriends] = useState<Friend[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const friendsListRef = useRef<HTMLDivElement>(null);

  const addLocalFriend = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (newFriend.trim()) {
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
      }
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
      <Button
        className="flex size-16 h-auto w-16 flex-col items-center justify-center gap-1.5 border-0 bg-transparent px-1.5 py-1 text-sm font-medium hover:bg-transparent"
        variant="secondary"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex size-16 items-center justify-center">
          <div className="relative flex aspect-square size-14 items-center justify-center rounded-full border-2 border-dashed border-neutral-200 bg-white text-neutral-500 transition-colors group-hover:bg-neutral-100 group-hover:text-neutral-900">
            <Plus strokeWidth="3" size={16} />
          </div>
        </div>
        Add
      </Button>

      <ResponsiveDialogDrawer
        title="Add friends"
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <>
          <form onSubmit={addLocalFriend} className="flex gap-2">
            <label htmlFor="friend" className="sr-only">
              {"Enter friend's name"}
            </label>
            <Input
              id="friend"
              value={newFriend}
              onChange={(e) => setNewFriend(e.target.value)}
              placeholder="Enter friend's name"
              className="flex-grow"
              maxLength={16}
            />
            <Button
              type="submit"
              className="sr-only bg-green-50 text-green-500"
            >
              Add
            </Button>
          </form>

          {localFriends.length > 0 && (
            <div
              ref={friendsListRef}
              className="no-scrollbar -mx-6 -my-2 flex gap-1.5 overflow-x-auto scroll-smooth px-6 py-2"
            >
              {localFriends.map((friend) => (
                <FriendTag
                  key={friend.id}
                  name={friend.name}
                  color={friend.color}
                  onClick={() => removeLocalFriend(friend.id)}
                  friendTagVariant="delete"
                />
              ))}
            </div>
          )}

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
