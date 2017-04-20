export const pad = (str: string, len: number, chr: string, leftJustify?: boolean) => {
    let padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
}