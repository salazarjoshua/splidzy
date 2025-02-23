import { useStore } from "./useStore";
import { formatCurrency } from "@/lib/utils";

export const calculateFriendTotal = (friendId: string): string => {
    const { items, friends } = useStore.getState();

    const total = items.reduce((total, item) => {
        if (item.assignedTo.length === 0) {
            return total + item.price / friends.length;
        }
        if (item.assignedTo.includes(friendId)) {
            return total + item.price / item.assignedTo.length;
        }
        return total;
    }, 0);

    return formatCurrency(total);
};
