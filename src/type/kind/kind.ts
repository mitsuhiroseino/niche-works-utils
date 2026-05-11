import { KindType } from './constants';

/**
 * typeofの拡張。\
 * typeof value === 'object' よりも詳細な結果を返す
 *
 * @param data 任意の値
 * @returns
 */
const kind = (data: unknown): KindType => _kind(data);
kind.dataLast = () => kind;
export default kind;

function _kind(data: unknown): KindType {
  const type = typeof data;
  if (type === 'object') {
    if (data === null) {
      return KindType.null;
    } else if (Array.isArray(data)) {
      return KindType.array;
    } else if (Object.getPrototypeOf(data) === Object.prototype) {
      return KindType.plainobject;
    } else if (data instanceof Date) {
      return KindType.date;
    } else if (data instanceof RegExp) {
      return KindType.regexp;
    } else if (data instanceof Error) {
      return KindType.error;
    } else if (data instanceof Map) {
      return KindType.map;
    } else if (data instanceof Set) {
      return KindType.set;
    } else if (data instanceof WeakMap) {
      return KindType.weakmap;
    } else if (data instanceof WeakSet) {
      return KindType.weakset;
    } else if (data instanceof Promise) {
      return KindType.promise;
    } else if (data instanceof ArrayBuffer) {
      return KindType.arraybuffer;
    } else if (data instanceof SharedArrayBuffer) {
      return KindType.sharedarraybuffer;
    }
    return KindType.object;
  } else {
    return type;
  }
}
