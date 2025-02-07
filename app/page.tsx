"use client";
import { ManageFriends } from "@/components/manage-friends";
import { AddItems } from "@/components/add-items";
import { Receipt } from "@/components/receipt";

export default function ReceiptSplitter() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row">
        <div className="w-full space-y-4 md:w-96">
          <ManageFriends />
          <AddItems />
        </div>
        <Receipt />
      </div>
    </div>
  );
}
