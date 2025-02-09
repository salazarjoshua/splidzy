"use client";
import React from "react";
import { Button } from "./ui/button";
import { Ask, Github } from "./icons";
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
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const content = (
    <section className="space-y-4 font-medium text-neutral-500">
      <p>
        {`PayMixx is a split bill calculator made for nights out—because no one wants to do math after a good time.`}
      </p>
      <p>
        {`What started as an inside joke between Joshua and his friends turned into a simple tool built for their crew. It's designed for their way of splitting expenses, but hey, maybe it'll work for your group too!`}
      </p>
      <p>{`No stress, no spreadsheets—just tap, split, and vibe. 🎶💸`}</p>
      <div className="!mt-8 flex flex-wrap gap-1.5">
        <Button variant="outline" size="withIcon" asChild>
          <Link href={"https://joshuasalazar.me/"} target="_blank">
            <Image
              src={avatar}
              placeholder="blur"
              alt=""
              width={20}
              height={20}
              className="size-5 rounded-full"
            />
            Joshua Salazar
          </Link>
        </Button>

        <Button variant="outline" size="withIcon" asChild>
          <Link
            href={"https://github.com/salazarjoshua/paymixx"}
            target="_blank"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-neutral-800 text-white">
              <Github className="size-3" />
            </div>
            View on Github
          </Link>
        </Button>
      </div>
    </section>
  );

  return (
    <>
      <footer className="bottom-4 left-4 mt-4 md:fixed">
        <Button
          variant="outline"
          size="withIcon"
          onClick={() => setDialogOpen(true)}
        >
          <div className="flex size-5 items-center justify-center rounded-full bg-pink-500 text-pink-50">
            <Ask className="size-3" />
          </div>
          About
        </Button>
      </footer>

      {isDesktop ? (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent
            className="gap-4 sm:max-w-md"
            aria-describedby={undefined}
          >
            <DialogHeader>
              <DialogTitle className="text-left">About PayMixx</DialogTitle>
            </DialogHeader>
            {content}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={dialogOpen} onOpenChange={setDialogOpen}>
          <DrawerContent aria-describedby={undefined}>
            <DrawerHeader>
              <DrawerTitle className="text-left">About PayMixx</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-6 px-6 pb-6">{content}</div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default About;
