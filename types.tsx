interface Friend {
  id: string;
  name: string;
  color: "yellow" | "lime" | "lavender" | "sky" | "peach" | "rose";
}

interface Item {
  id: string;
  name: string;
  price: number;
  assignedTo: string[];
  isAllFriends: boolean;
}

export type { Friend, Item };
