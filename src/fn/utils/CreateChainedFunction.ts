import isFunction from 'lodash-es/isFunction';

export const createChainedFunction = (...funcs) => {
    return funcs
        .filter(f => (isFunction(f)))
        .reduce((acc, f) => {
            if (!isFunction(f)) {
                throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
            }

            if (acc === null) {
                return f;
            }

            return function chainedFunction(...args) {
                acc.apply(this, args);
                f.apply(this, args);
            };
    }, null);
}