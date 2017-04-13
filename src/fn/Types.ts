
// ===================== Types =======================
/** @returns object string name (using Object.prototype.toString.call) */
export const getType = function (x: any): string {
    return Object.prototype.toString.call(x);
};

/** @returns true if object is number */
export const isNumber = function(x: any): x is number {
    return getType(x) === "[object Number]";
};

/** @returns true if object is string */
export const isString = function (x: any): x is string {
    return getType(x) === "[object String]";
};

/** @returns true if object is Date */
export const isDate = function (x: any): x is Date {
    return getType(x) === "[object Date]";
};

/** @returns true if object is function */
export const isFunction = function (x: any): boolean {
    return getType(x) === "[object Function]";
};

/** @returns true if object is array */
export const isArray = function (x: any): boolean {
    return getType(x) === "[object Array]";
};

/** @return true if object is empty object  */
export const isEmptyObject = (obj) => {
    var name;
    for ( name in obj ) {
        return false;
    }

    return true;
}