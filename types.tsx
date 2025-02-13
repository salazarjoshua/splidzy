interface Friend {
  id: string;
  name: string;
  color: "yellow" | "lavender" | "sky" | "peach" | "rose" | "lime";
}

interface Item {
  id: number;
  name: string;
  price: number;
  assignedTo: string[];
}

export type { Friend, Item };
