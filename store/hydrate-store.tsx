"use client";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function HydrateStore() {
  useEffect(() => {
    const savedAll = localStorage.getItem("splidzy");
    if (savedAll) {
      try {
        const { friends, items } = JSON.parse(savedAll);
        useStore.getState().setHydratedData(friends, items);
      } catch (e) {
        console.error("Error parsing saved data:", e);
      }
    } else {
      const savedFriends = localStorage.getItem("splidzy_friends");
      if (savedFriends) {
        try {
          const { friends } = JSON.parse(savedFriends);
          useStore.getState().setHydratedData(friends, []);
        } catch (e) {
          console.error("Error parsing saved friends:", e);
        }
      }
    }
  }, []);

  return null;
}
