"use client";
import { ManageFriends } from "@/components/manage-friends";
import { AddItems } from "@/components/add-items";
import { Receipt } from "@/components/receipt";
import About from "@/components/about";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "@/components/icons";

export default function ReceiptSplitter() {
  return (
    <>
      <div className="md:space-y-8">
        <div className="sr-only mx-auto flex max-w-4xl flex-col justify-between gap-4 px-4 md:flex-row">
          <h1 className="text-2xl font-bold">Paymixx</h1>
          <div className="flex items-center gap-2">
            <Button variant={"outline"}>Save as Draft</Button>
            <Button
              asChild
              className="bg-green-500 text-green-50 hover:bg-green-500/90"
            >
              <Link href={"export"}>
                <Check className="size-4" />
                View Summary
              </Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-4 md:flex-row">
          <aside className="w-full space-y-4 md:w-5/12">
            <ManageFriends />
            <AddItems />
          </aside>
          <Receipt />
        </div>
      </div>
      <About />
    </>
  );
}
