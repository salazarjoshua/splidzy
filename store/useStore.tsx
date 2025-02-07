import { create } from "zustand";

interface Friend {
  id: number;
  name: string;
  color: "green" | "pink" | "purple" | "blue";
}

interface Item {
  id: number;
  name: string;
  price: number;
  assignedTo: number[];
}

interface ReceiptStore {
  friends: Friend[];
  items: Item[];
  addFriend: (name: string) => void;
  editFriend: (id: number, name: string) => void;
  removeFriend: (id: number) => void;
  addItem: (item: Omit<Item, "id">) => void;
  editItem: (item: Item) => void;
  removeItem: (id: number) => void;
}

const colors: ("green" | "pink" | "purple" | "blue")[] = [
  "green",
  "pink",
  "purple",
  "blue",
];

export const useStore = create<ReceiptStore>((set) => ({
  friends: [],
  items: [],
  addFriend: (name) =>
    set((state) => ({
      friends: [
        ...state.friends,
        {
          id: Date.now(),
          name,
          color: colors[state.friends.length % colors.length],
        },
      ],
    })),
  editFriend: (id, name) =>
    set((state) => ({
      friends: state.friends.map((friend) =>
        friend.id === id ? { ...friend, name } : friend,
      ),
    })),
  removeFriend: (id) =>
    set((state) => ({
      friends: state.friends.filter((f) => f.id !== id),
      items: state.items.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.filter((fid) => fid !== id),
      })),
    })),
  addItem: (newItem) =>
    set((state) => ({
      items: [...state.items, { id: Date.now(), ...newItem }],
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
}));
