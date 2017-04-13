import { isArray } from '../Types';

export const indexOf = (searchElement: any, arr: any[], fromIndex?: number) => {
    return ((!isArray(arr)) || (arr == null)) ? -1 : arr.indexOf(searchElement, fromIndex);
}