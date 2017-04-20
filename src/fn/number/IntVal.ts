export const intVal = (mixed_var: any, base?: number) => {
    base = base || 10;
    if (typeof mixed_var === "string") {
        const tmp = parseInt(mixed_var, base);
        if (isNaN(tmp)) {
            return 0;
        } else {
            return tmp;
        }
    } else if (typeof mixed_var === "number") {
        return Math.floor(mixed_var);
    } else {
        return 0;
    }
}