"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import Link from "next/link";
import avatar from "@/public/avatar.jpg";

const Settings = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setDialogOpen(true)}
        variant={"ghost"}
        size={"icon"}
        className="transition-transform hover:-translate-y-0.5 hover:-rotate-[8deg]"
      >
        <Image
          src={"/tossface/settings.svg"}
          alt=""
          width={24}
          height={24}
          className="transition-transform duration-500 group-hover:rotate-180"
        />
      </Button>

      <ResponsiveDialogDrawer
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Extras & Support"
      >
        <div className="flex flex-col gap-2">
          <Button
            variant="secondary"
            className="flex-0 flex-row justify-start gap-4 text-sm"
          >
            <div className="flex size-6 justify-center">
              <Image
                src={"/tossface/receipt-twe.svg"}
                alt=""
                width={22}
                height={22}
              />
            </div>
            Try sample data
          </Button>
          <Button
            variant="secondary"
            className="flex-0 flex-row justify-start gap-4 text-sm"
            asChild
          >
            <Link href="https://ko-fi.com/tiktilaok" target="_blank">
              <div className="flex size-6 justify-center">
                <Image
                  src={"/tossface/heart.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              Support me on Ko-fi
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="flex-0 flex-row justify-start gap-4 text-sm"
            asChild
          >
            <Link
              href="mailto:hello@joshuasalazar.me?subject=Splidzy%20-%20Support%20Request"
              target="_blank"
            >
              <div className="flex size-6 justify-center">
                <Image
                  src={"/tossface/speech.svg"}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              Have a problem or question?
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="justify-start gap-4 text-sm text-neutral-500"
          >
            <Link href={"https://joshuasalazar.me/"} target="_blank">
              <div className="flex size-6 justify-center">
                <Image
                  src={avatar}
                  placeholder="blur"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 rounded-full"
                />
              </div>
              Made by Joshua Salazar
            </Link>
          </Button>
        </div>
      </ResponsiveDialogDrawer>
    </>
  );
};

export default Settings;
