export const checkValidInput = (
    value: string,
    setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
    if (!value.trim()) {
        setError(true);
        setTimeout(() => setError(false), 600);
        return false;
    }
    return true;
};

export const validatePrice = (price: number, setError: (error: boolean) => void) => {
    if (isNaN(price) || price < 1 || price > 1_000_000) {
        setError(true);
        setTimeout(() => setError(false), 600);
        return false;
    }
    return true;
};


export function validateFriends(
    assignedTo: string[],
    setError: (error: boolean) => void
): boolean {
    if (assignedTo.length === 0) {
        setError(true);
        setTimeout(() => setError(false), 600);
        return false;
    }
    return true;
}
