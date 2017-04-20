export const strRepeat = (str: string, n: number) => {
    var result: string = "",
        t = str.toString();

    while (--n >= 0) {
        result += t;
    }

    return result;
}