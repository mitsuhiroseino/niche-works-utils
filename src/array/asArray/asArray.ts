import { isIterable } from '../../type';
import type { AsArrayOptions } from './types';

/**
 * 対象を配列として見なして変換する。
 * 文字列以外のIterableなオブジェクトは展開し、それ以外は配列で包む。
 */
const asArray = <T>(data: unknown, options: AsArrayOptions = {}): T[] =>
  _asArray(data, options);
asArray.dataLast =
  (options: AsArrayOptions = {}) =>
  <T>(data: unknown): T[] =>
    _asArray(data, options);
export default asArray;

function _asArray<T>(data: unknown, options: AsArrayOptions = {}): T[] {
  if (data == null) {
    return [];
  } else if (Array.isArray(data)) {
    return options.raw ? data : [...data];
  } else if (typeof data === 'string') {
    return [data as unknown as T];
  } else if (isIterable<T>(data)) {
    return Array.from(data);
  }

  return [data as T];
}
