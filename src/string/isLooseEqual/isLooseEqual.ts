import normalizeString from '../normalizeString';
import type { IsLooseEqualOptions } from './types';

/**
 * 2つの文字列が同等であることを判定する
 * @param value1 文字列1
 * @param value2 文字列2
 * @param options オプション
 * @returns
 */
const isLooseEqual = (
  value1: string,
  value2: string,
  options: IsLooseEqualOptions = {},
): boolean => _isLooseEqual(value1, value2, options);
isLooseEqual.dataLast =
  (value2: string, options: IsLooseEqualOptions = {}) =>
  (value1: string): boolean =>
    _isLooseEqual(value1, value2, options);
export default isLooseEqual;

function _isLooseEqual(
  value1: string,
  value2: string,
  options: IsLooseEqualOptions = {},
): boolean {
  const { noNormalizationForValue1, noNormalizationForValue2 } = options;
  // 比較
  const target1 = noNormalizationForValue1
    ? value1
    : normalizeString(value1, options);
  const target2 = noNormalizationForValue2
    ? value2
    : normalizeString(value2, options);
  return target1 === target2;
}
