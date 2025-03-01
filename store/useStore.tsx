import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Friend, Item } from "@/types";

export const colors: (
  | "yellow"
  | "lavender"
  | "sky"
  | "peach"
  | "rose"
  | "lime"
)[] = ["yellow", "lavender", "sky", "peach", "rose", "lime"];

const defaultFriends: Friend[] = [
  { id: "itzyitzy", name: "Me", color: colors[0] },
];
const defaultItems: Item[] = [];

interface ReceiptStore {
  friends: Friend[];
  items: Item[];
  setHydratedData: (friends: Friend[], items: Item[]) => void;
  addFriend: (name: string) => void;
  editFriend: (id: string, name: string) => void;
  removeFriend: (id: string) => void;
  addItem: (item: Omit<Item, "id">) => void;
  editItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clearData: () => void;
}

export const useStore = create<ReceiptStore>((set) => ({
  friends: defaultFriends,
  items: defaultItems,
  setHydratedData: (friends, items) => set({ friends, items }),

  addFriend: (name) =>
    set((state) => {
      const newFriend = {
        id: uuidv4(),
        name,
        color: colors[state.friends.length % colors.length],
      };

      return {
        friends: [...state.friends, newFriend],
        items: state.items.map((item) =>
          item.isAllFriends
            ? { ...item, assignedTo: [...item.assignedTo, newFriend.id] }
            : item,
        ),
      };
    }),

  editFriend: (id, name) =>
    set((state) => ({
      friends: state.friends.map((friend) =>
        friend.id === id ? { ...friend, name } : friend,
      ),
    })),

  removeFriend: (id) =>
    set((state) => {
      const updatedFriends = state.friends.filter((f) => f.id !== id);

      return {
        friends: updatedFriends,
        items: state.items.map((item) => ({
          ...item,
          assignedTo: item.isAllFriends
            ? updatedFriends.map((friend) => friend.id)
            : item.assignedTo.filter((fid) => fid !== id),
        })),
      };
    }),

  addItem: (newItem) =>
    set((state) => ({
      items: [
        ...state.items,
        { id: uuidv4(), ...newItem, isAllFriends: newItem.isAllFriends },
      ],
    })),

  editItem: (updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearData: () =>
    set(() => ({
      friends: defaultFriends,
      items: defaultItems,
    })),
}));
