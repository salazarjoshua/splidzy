"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ResponsiveDialogDrawer } from "./ui/responsive-dialog-drawer";
import { useStore } from "@/store/useStore";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const SaveData = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { clearData } = useStore();

  const handleSaveAllData = async () => {
    const { friends, items } = useStore.getState();
    setDialogOpen(false);

    await toast.promise(
      new Promise<void>((resolve, reject) => {
        try {
          localStorage.setItem("splidzy", JSON.stringify({ friends, items }));
          resolve();
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: "Saving...",
        success: "Saved",
        error: "Something went wrong",
      },
    );
  };

  const handleSaveFriends = async () => {
    const { friends } = useStore.getState();
    setDialogOpen(false);

    await toast.promise(
      new Promise<void>((resolve, reject) => {
        try {
          localStorage.setItem("splidzy_friends", JSON.stringify({ friends }));
          resolve();
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: "Saving...",
        success: "Saved",
        error: "Something went wrong",
      },
    );
  };

  const handleClearData = async () => {
    setDialogOpen(false);

    await toast.promise(
      new Promise<void>((resolve, reject) => {
        try {
          localStorage.removeItem("splidzy");
          localStorage.removeItem("splidzy_friends");
          clearData();
          resolve();
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: "Clearing...",
        success: "Cleared",
        error: "Something went wrong",
      },
    );
  };

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setDialogOpen(true)}
              variant={"ghost"}
              size={"icon"}
              className="transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              <Image src={"/tossface/save.svg"} alt="" width={24} height={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="text-xs">manage data</TooltipContent>
        </Tooltip>
      </TooltipProvider>

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
