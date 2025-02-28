"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TipJar = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    const text = "https://splidzy.vercel.app/";
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
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setDialogOpen(true)}
              variant={"ghost"}
              size={"icon"}
              className="transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              <Image
                src={"/tossface/heart.svg"}
                alt=""
                width={24}
                height={24}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="text-xs">tip jar</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <ResponsiveDialogDrawer
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Tip Jar"
      >
        <div className="flex w-full items-center justify-center gap-2 rounded-2xl pl-1">
          <p className="text-center text-sm font-medium text-neutral-500 md:text-balance">
            If you find Splidzy helpful, consider{" "}
            <span className="font-semibold text-neutral-950">
              buying me a coffee
            </span>{" "}
            to support my work.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button size={"lg"} className="flex-0 flex-row" asChild>
            <Link href="https://ko-fi.com/tiktilaok" target="_blank">
              <Image
                src={"/tossface/heart.svg"}
                alt=""
                width={24}
                height={24}
              />
              Buy me a coffee
            </Link>
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button onClick={handleCopyLink} variant="secondary" size={"lg"}>
              {isCopied ? (
                <Image
                  src={"/tossface/check.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src={"/tossface/link.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              )}
              {isCopied ? "Copied" : "Copy link"}
            </Button>
            <Button variant="secondary" size={"lg"} asChild>
              <Link
                href="https://github.com/salazarjoshua/splidzy"
                target="_blank"
              >
                <Image
                  src={"/tossface/robot.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                Github
              </Link>
            </Button>
          </div>
        </div>
      </ResponsiveDialogDrawer>
    </>
  );
};

export default TipJar;
