import { useStore } from "./useStore";

export const calculateFriendTotal = (friendId: string): number => {
    const { items, friends } = useStore.getState();

    return items.reduce((total, item) => {
        if (item.assignedTo.length === 0) {
            return total + item.price / friends.length;
        }
        if (item.assignedTo.includes(friendId)) {
            return total + item.price / item.assignedTo.length;
        }
        return total;
    }, 0);
};
