import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FriendTagAvatar } from "./friend-tag";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import DashedUnderline from "./ui/dashed-underline";
import { ScrollArea } from "@/components/ui/scroll-area";
import { KidStar } from "./icons";

interface FriendsListDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (friendId: string) => void;
  selectedFriend: string;
}

export function FriendsListDialog({
  open,
  onOpenChange,
  onSelect,
  selectedFriend,
}: FriendsListDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { friends, items } = useStore();

  const calculateFriendTotal = (friendId: number) => {
    return items.reduce((total, item) => {
      if (item.assignedTo.length === 0) {
        return total + item.price / friends.length;
      }
      if (item.assignedTo.includes(friendId)) {
        return total + item.price / item.assignedTo.length;
      }
      return total;
    }, 0);
  };

  const content =
    friends.length === 0 ? (
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center font-medium text-neutral-500">
        <KidStar className="w-16" />
        <p>
          Friends: 0
          <br />
          Vibes: 100
        </p>
      </div>
    ) : (
      <>
        <ScrollArea className="h-80">
          <div className="flex w-full flex-col gap-1">
            {friends.map((friend) => (
              <Button
                key={friend.id}
                onClick={() => onSelect(friend.id.toString())}
                variant="secondary"
                className={cn(
                  "flex w-full items-center gap-2 p-3 md:gap-8",
                  friend.id.toString() === selectedFriend
                    ? "bg-neutral-900 text-white hover:bg-neutral-900/90"
                    : "",
                )}
              >
                <div className="flex min-w-6 items-center gap-3">
                  <FriendTagAvatar
                    initial={friend.name}
                    color={friend.color}
                    selected={friend.id.toString() === selectedFriend}
                  />
                  <span className="truncate font-medium">{friend.name}</span>
                </div>
                <div className="min-w-6 flex-1">
                  <DashedUnderline />
                </div>
                <div>
                  <span className="font-medium">
                    {calculateFriendTotal(friend.id).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <div className="flex justify-center">
          <Button
            size="sm"
            className="rounded-full text-sm"
            onClick={() => {
              onSelect("all");
              onOpenChange(false);
            }}
            disabled={selectedFriend === "all"}
          >
            Clear filter
          </Button>
        </div>
      </>
    );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle className={`${friends.length === 0 && "sr-only"}`}>
              Choose a Friend
            </DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent aria-describedby={undefined}>
        <DrawerHeader>
          <DrawerTitle className={`${friends.length === 0 && "sr-only"}`}>
            Choose a Friend
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-6 px-6 pb-6">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
