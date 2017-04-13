export const inArray = function (needle: any, haystack: any[], strict?: boolean) {
    var found = false;
    var key: string|any;
    var strct = !!strict;
    for (key in haystack) {
        if ((strct && haystack[key] === needle) || (!strct && haystack[key] == needle)) {
            found = true;
            break;
        }
    }

    return found;
};