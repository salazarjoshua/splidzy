"use client";
import { FriendTagAvatar } from "@/components/friend-tag";
import { Download } from "@/components/icons";
import { Button, ButtonIcon } from "@/components/ui/button";
import DashedUnderline from "@/components/ui/dashed-underline";
import { useStore } from "@/store/useStore";
import { toPng } from "html-to-image";
import Link from "next/link";
import React, { useRef } from "react";
import { FriendListEmpty } from "@/components/friends-list-dialog";
import { ArrowLeft } from "lucide-react";

const Export = () => {
  const { friends, items } = useStore();
  const receiptRef = useRef<HTMLDivElement>(null);

  const buildPng = async (
    content: HTMLDivElement,
    width: number,
    height: number,
  ) => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let dataUrl = "";
    let i = 0;
    const maxAttempts = isSafari ? 5 : 1;
    const cycle: number[] = [];
    let repeat = true;

    while (repeat && i < maxAttempts) {
      dataUrl = await toPng(content, {
        fetchRequestInit: { cache: "no-cache" },
        width,
        height,
        quality: 1,
        style: {
          transformOrigin: "top left",
          borderRadius: "1.5rem",
          height: "auto",
        },
      });
      i += 1;
      cycle[i] = dataUrl.length;

      if (dataUrl.length > cycle[i - 1]) repeat = false;
    }

    return dataUrl;
  };

  const exportReceipt = async () => {
    if (receiptRef?.current) {
      try {
        const width = receiptRef.current.offsetWidth;
        const height = receiptRef.current.offsetHeight;

        const pngDataUrl = await buildPng(
          receiptRef.current as HTMLDivElement,
          width,
          height,
        );

        const link = document.createElement("a");
        link.download = "receipt-paymixx.png";
        link.href = pngDataUrl;
        link.click();
      } catch (error) {
        console.error("Failed to generate image:", error);
      }
    }
  };

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

  const total = items.reduce((sum, item) => {
    const amount = item.price;
    return sum + amount;
  }, 0);

  return (
    <section className="mx-auto flex flex-col gap-4 sm:max-w-md">
      <div className="flex items-center justify-between">
        <Button
          asChild
          variant={"outline"}
          size={"icon"}
          className="rounded-xl font-medium text-neutral-500"
        >
          <Link href={"/"}>
            <ArrowLeft size={16} />
          </Link>
        </Button>
      </div>
      <div
        className="rounded-3xl border border-neutral-200 bg-white p-6"
        ref={receiptRef}
      >
        {!friends.length ? (
          <FriendListEmpty />
        ) : (
          <div className="flex w-full flex-col gap-1">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex w-full items-center gap-2 rounded-xl bg-neutral-50 p-3 font-semibold md:gap-8"
              >
                <div className="flex min-w-6 items-center gap-3">
                  <FriendTagAvatar
                    initial={friend.name}
                    color={friend.color}
                    selected={false}
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
              </div>
            ))}

            <div className="flex items-center justify-between gap-8 px-3 pt-6 font-bold">
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
        )}
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          variant={"outline"}
          className="relative"
          disabled={friends.length === 0}
        >
          Copy as Text
        </Button>
        <Button
          onClick={exportReceipt}
          className="relative flex-1"
          disabled={friends.length === 0}
        >
          <ButtonIcon>
            <Download />
          </ButtonIcon>
          Export as image
        </Button>
      </div>
    </section>
  );
};

export default Export;
