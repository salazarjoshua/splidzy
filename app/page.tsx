"use client";

import { ManageFriends } from "@/components/manage-friends";
import { ManageItems } from "@/components/manage-expense";
import StickyActionBar from "@/components/sticky-action-bar";
import AddFriends from "@/components/add-friends";
import { AddExpenseButton } from "@/components/add-expense-button";
import ExportButton from "@/components/export-button";
import Image from "next/image";

export default function Splidzy() {
  return (
    <>
      <ManageFriends />
      <ManageItems />
      <StickyActionBar>
        <div className="grid w-full grid-cols-3 flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-2">
          <AddFriends />

          <AddExpenseButton
            variant={"secondary"}
            size={"lg"}
            className="text-neutral-500"
          >
            <Image src="/tossface/money.svg" alt="" width={24} height={24} />
            Add Expense
          </AddExpenseButton>

          <ExportButton />
        </div>
      </StickyActionBar>
    </>
  );
}
