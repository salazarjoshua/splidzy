import React from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { Button } from "./ui/button";
import Image from "next/image";

const ExportButton = () => {
  const router = useRouter();

  const { friends, items } = useStore();

  const handleClick = (href: string) => {
    router.push(href);
  };

  const currentItems = items;

  return (
    <Button
      onClick={() => handleClick("export")}
      className="disabled:bg-neutral-900/50 disabled:text-neutral-300 disabled:opacity-100 disabled:grayscale"
      size={"lg"}
      disabled={friends.length < 1 || currentItems.length < 1}
    >
      <Image src={"/tossface/scissors.svg"} alt="" width={24} height={24} />
      Split
    </Button>
  );
};

export default ExportButton;
