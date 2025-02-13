"use client";
import { ManageFriends } from "@/components/manage-friends";
import { Receipt } from "@/components/receipt";
import About from "@/components/about";

export default function ReceiptSplitter() {
  return (
    <>
      <main className="mx-auto flex max-w-md flex-col justify-center gap-4">
        <ManageFriends />
        <Receipt />
      </main>
      <About />
    </>
  );
}
