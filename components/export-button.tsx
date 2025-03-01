import React from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { Button } from "./ui/button";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

const ExportButton = () => {
  const router = useRouter();

  const { friends, items } = useStore();

  const handleClick = (href: string) => {
    router.push(href);
  };

  const currentItems = items;

  const total = currentItems.reduce((sum, item) => {
    const amount = item.price;
    return sum + amount;
  }, 0);

  return (
    <Button
      onClick={() => handleClick("export")}
      className="relative disabled:bg-neutral-900/50 disabled:text-neutral-300 disabled:opacity-100 disabled:grayscale"
      size={"lg"}
      disabled={friends.length < 1 || currentItems.length < 1}
    >
      <Image src={"/tossface/scissors.svg"} alt="" width={24} height={24} />
      Split
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-2 rotate-[5deg] rounded-full border border-yellow-400 bg-yellow-200 px-2 py-0.5 text-right text-sm font-semibold text-yellow-950">
        <Image
          src={"/tossface/money.svg"}
          alt=""
          width={18}
          height={18}
          className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-full"
        />
        {formatCurrency(total)}
      </div>
    </Button>
  );
};

export default ExportButton;
