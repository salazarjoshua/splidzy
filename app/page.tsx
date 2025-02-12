"use client";
import { ManageFriends } from "@/components/manage-friends";
import { AddItems } from "@/components/add-items";
import { Receipt } from "@/components/receipt";
import About from "@/components/about";

export default function ReceiptSplitter() {
  return (
    <>
      <main className="mx-auto flex max-w-lg flex-col justify-center gap-4">
        <ManageFriends />
        <AddItems />
        <Receipt />
      </main>
      <About />
    </>
  );
}
