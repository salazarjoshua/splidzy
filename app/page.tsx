"use client";
import { ManageFriends } from "@/components/manage-friends";
import { ManageItems } from "@/components/manage-items";
import About from "@/components/about";

export default function Splidzy() {
  return (
    <>
      <main className="mx-auto flex max-w-md flex-col justify-center gap-4">
        <ManageFriends />
        <ManageItems />
      </main>
      <About />
    </>
  );
}
