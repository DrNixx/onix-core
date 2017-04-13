export const grep = (elems: any[], callback: Function, invert?: boolean) => {
    var callbackInverse,
        matches = [];
    let i = 0;
    const length = elems.length;
    const callbackExpect = !invert;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
        callbackInverse = !callback(elems[ i ], i);
        if (callbackInverse !== callbackExpect) {
            matches.push( elems[ i ] );
        }
    }

    return matches;
}