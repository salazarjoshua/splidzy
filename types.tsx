interface Friend {
  id: string;
  name: string;
  color: "green" | "pink" | "purple" | "blue";
}

interface Item {
  id: number;
  name: string;
  price: number;
  assignedTo: number[];
}

export type { Friend, Item };
