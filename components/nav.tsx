"use client";

import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-4">
      <div>
        {pathname !== "/" && (
          <Button asChild variant={"outline"} size={"icon"}>
            <Link href={"/"}>
              <ChevronLeft />
            </Link>
          </Button>
        )}
      </div>
      <div>
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href="/about/general">
            <Info />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
