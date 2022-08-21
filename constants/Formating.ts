export const getFullDate = (date: any) => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
