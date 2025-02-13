"use client";
import { FriendTagAvatar } from "@/components/friend-tag";
import { Download } from "@/components/icons";
import { Button, ButtonIcon } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { toPng } from "html-to-image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const Export = () => {
  const { friends, items } = useStore();
  const receiptRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

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

  const calculateFriendTotal = (friendId: string) => {
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

  const countAssignedItems = (friendId: string) => {
    return items.filter((item) => item.assignedTo.includes(friendId)).length;
  };

  const handleCopyReceiptText = () => {
    if (!friends.length) return;

    const text = friends
      .map((friend) => {
        const total = calculateFriendTotal(friend.id);
        const formattedTotal =
          total % 1 === 0 ? total.toFixed(0) : total.toFixed(2);

        return `${friend.name} - ${formattedTotal}`;
      })
      .join("\n");

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

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
        className="flex flex-col gap-8 rounded-3xl border border-neutral-200 bg-white p-6 pb-10"
        ref={receiptRef}
      >
        <div className="mt-2 space-y-0.5 text-center">
          <h1 className="text-3xl font-bold">splidzy</h1>
          <p className="text-sm font-medium text-neutral-500">
            split bills, stay besties ✌️
          </p>
        </div>
        <div className="flex w-full flex-col gap-2.5">
          {friends.map((friend) => (
            <div key={friend.id}>
              <div
                className={
                  "flex w-full items-center justify-between gap-4 rounded-xl"
                }
              >
                <div className="flex items-center gap-1.5">
                  <FriendTagAvatar
                    name={friend.name}
                    color={friend.color}
                    className="size-14"
                  />
                  <div>
                    <h2 className="font-semibold">{friend.name}</h2>
                    <p className="text-sm text-neutral-500">
                      {countAssignedItems(friend.id)} item
                      {countAssignedItems(friend.id) > 1 && "s"}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-semibold">
                    {formatCurrency(calculateFriendTotal(friend.id))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-neutral-500">
            see you next split! 🫶
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          onClick={handleCopyReceiptText}
          variant={"outline"}
          className="relative overflow-hidden"
          disabled={friends.length === 0}
        >
          <span
            className={`${isCopied ? "-translate-y-[150%]" : "translate-y-0"} transition-all`}
          >
            Copy as text
          </span>
          <span
            className={`${isCopied ? "translate-y-0" : "translate-y-[150%]"} absolute left-1/2 -translate-x-1/2 transition-all`}
          >
            Copied 🥳
          </span>
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
