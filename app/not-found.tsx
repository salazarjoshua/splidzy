"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 p-4">
      <div className="flex flex-col items-center gap-4 rounded-3xl p-6">
        <div className="mt-2 space-y-0.5 text-center">
          <h1 className="text-3xl font-bold">404.00</h1>
          <p className="text-sm font-medium text-neutral-500">
            {"Nope, that's not your bill—"} <br />{" "}
            {"it just means this page doesn't exist."}
          </p>
        </div>
        <Button asChild className="h-auto w-fit">
          <Link href={"/"}>Go home</Link>
        </Button>
      </div>
    </div>
  );
}
