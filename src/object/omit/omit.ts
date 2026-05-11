import * as R from 'remeda';
import _parsePath from '../../_internal/_parsePath';

const omit = <T, R = unknown>(
  data: T,
  path: PropertyKey | PropertyKey[],
): R | undefined => _omit(data, path);
omit.dataLast =
  <T, R = unknown>(path: PropertyKey | PropertyKey[]) =>
  (data: T): R | undefined =>
    _omit(data, path);
export default omit;

function _omit<T, R = unknown>(
  data: T,
  path: PropertyKey | PropertyKey[],
): R | undefined {
  if (data == null) {
    return undefined;
  }
  const keys = _parsePath(path);
  // R.omit は動的なキー配列をスプレッドする型定義を持たないため
  // asで今回の利用方法に合った型を定義する
  return (R.omit as (...args: unknown[]) => R | undefined)(data, ...keys);
}
