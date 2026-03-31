import { KindType } from './constants';

/**
 * typeofの拡張。\
 * typeof value === 'object' の場合により詳細な結果を返す
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
      return KindType.NULL;
    } else if (Array.isArray(data)) {
      return KindType.ARRAY;
    } else if (Object.getPrototypeOf(data) === Object.prototype) {
      return KindType.PLAIN_OBJECT;
    } else if (data instanceof Date) {
      return KindType.DATE;
    } else if (data instanceof RegExp) {
      return KindType.REGEXP;
    } else if (data instanceof Error) {
      return KindType.ERROR;
    } else if (data instanceof Map) {
      return KindType.MAP;
    } else if (data instanceof Set) {
      return KindType.SET;
    } else if (data instanceof WeakMap) {
      return KindType.WEAK_MAP;
    } else if (data instanceof WeakSet) {
      return KindType.WEAK_SET;
    } else if (data instanceof Promise) {
      return KindType.PROMISE;
    } else if (data instanceof ArrayBuffer) {
      return KindType.ARRAY_BUFFER;
    } else if (data instanceof SharedArrayBuffer) {
      return KindType.SHARED_ARRAY_BUFFER;
    }
    return KindType.OBJECT;
  } else {
    return type;
  }
}
