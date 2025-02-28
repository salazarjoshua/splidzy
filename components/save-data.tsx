"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import { useStore } from "@/store/useStore";

const SaveData = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { clearData } = useStore();

  const handleSaveAllData = () => {
    const { friends, items } = useStore.getState();
    localStorage.setItem("splidzy", JSON.stringify({ friends, items }));
    setDialogOpen(false);
    alert("All data saved!");
  };

  const handleSaveFriends = () => {
    const { friends } = useStore.getState();
    localStorage.setItem("splidzy_friends", JSON.stringify({ friends }));
    setDialogOpen(false);
    alert("Friends data saved!");
  };

  const handleClearData = () => {
    localStorage.removeItem("splidzy");
    localStorage.removeItem("splidzy_friends");
    setDialogOpen(false);
    clearData();
    alert("All data cleared!");
  };

  return (
    <>
      <Button
        onClick={() => setDialogOpen(true)}
        variant={"ghost"}
        size={"icon"}
        className="transition-transform hover:-translate-y-0.5 hover:-rotate-[8deg]"
      >
        <Image src={"/tossface/save.svg"} alt="" width={24} height={24} />
      </Button>

      <ResponsiveDialogDrawer
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Manage Data"
      >
        <div className="flex w-full items-center justify-center gap-2 rounded-2xl pl-1">
          <Image src={"/tossface/file-box.svg"} alt="" width={24} height={24} />
          <p className="text-sm font-medium text-neutral-500 md:text-balance">
            {"Everything is saved on your device, not the internet."}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleSaveAllData}
            variant="secondary"
            size={"lg"}
            className="flex-0 flex-row"
          >
            <Image src={"/tossface/save.svg"} alt="" width={24} height={24} />
            Save data
          </Button>
          <Button
            onClick={handleSaveFriends}
            variant="secondary"
            size={"lg"}
            className="flex-0 flex-row"
          >
            <Image
              src={"/tossface/friends.svg"}
              alt=""
              width={24}
              height={24}
            />
            Save friends only
          </Button>
          <Button
            onClick={handleClearData}
            variant="destructive"
            className="bg-transparent text-sm hover:bg-red-50"
          >
            Clear data
          </Button>
        </div>
      </ResponsiveDialogDrawer>
    </>
  );
};

export default SaveData;
