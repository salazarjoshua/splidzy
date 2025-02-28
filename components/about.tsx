"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github } from "./icons";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";

const About = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setDialogOpen(true)}
        className="h-auto rounded-full border-2 border-dashed bg-white px-4 py-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900"
      >
        About
      </Button>

      <ResponsiveDialogDrawer
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="About Splidzy"
      >
        <section className="space-y-4 font-medium text-neutral-500">
          <p>
            {`Splidzy is the coolest bill-splitting calculator—made for nights out, because who wants math after a good time?`}
          </p>
          <p>
            {`What started as an inside joke between Joshua and his friends turned into a simple tool built for their crew. It's designed for their way of splitting expenses, but hey, maybe it'll work for your group too!`}
          </p>
          <p>{`No stress, no spreadsheets—just tap, split, and vibe. 🎶💸`}</p>
          <div className="!mt-8 flex flex-wrap gap-1.5">
            <Button variant="outline" asChild>
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

            <Button variant="outline" asChild>
              <Link
                href={"https://github.com/salazarjoshua/splidzy"}
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
      </ResponsiveDialogDrawer>
    </>
  );
};

export default About;
