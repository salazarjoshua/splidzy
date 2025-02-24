"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SaveData from "./save-data";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 -mb-8 flex items-center justify-between gap-4 bg-gradient-to-b from-neutral-100 via-neutral-100 via-50% to-neutral-100/0 pb-8 pt-4">
      <div>
        {pathname !== "/" && (
          <Button asChild variant={"ghost"} size={"icon"}>
            <Link href={"/"}>
              <Image
                src={"/tossface/back.svg"}
                alt=""
                width={24}
                height={24}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </Link>
          </Button>
        )}
      </div>
      <div className="flex gap-1">
        <SaveData />
        <Button
          variant={"ghost"}
          size={"icon"}
          asChild
          className="border-0 bg-transparent"
        >
          <Link href="/about/general">
            <Image
              src={"/tossface/settings.svg"}
              alt=""
              width={24}
              height={24}
              className="transition-transform duration-500 group-hover:rotate-180"
            />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
