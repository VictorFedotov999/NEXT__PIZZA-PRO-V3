export const activeCheckbox = (
    value: string,
    setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>,
) => {
    setSelectedIds((prev) =>
        prev.includes(value) ? prev.filter((id) => id !== value) : [...prev, value],
    );
};
