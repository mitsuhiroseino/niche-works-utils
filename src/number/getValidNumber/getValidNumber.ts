import isValidNumber from '../../type/isValidNumber';
import type { GetValidNumberOptions } from './types';

/**
 * 対象の値が有効な数値でない場合はデフォルト値を返す
 * @param value 対象の値
 * @param options オプション
 * @returns 対象の値またはデフォルト値
 */
const getValidNumber = (
  value: number | null | undefined,
  options: GetValidNumberOptions = {},
): number => _getValidNumber(value, options);
getValidNumber.dataLast =
  (options: GetValidNumberOptions = {}) =>
  (value: number | null | undefined): number =>
    _getValidNumber(value, options);
export default getValidNumber;

function _getValidNumber(
  value: number | null | undefined,
  options: GetValidNumberOptions = {},
): number {
  const { defaultValue = 0, ...rest } = options;
  return (isValidNumber(value, rest) ? value : defaultValue) as number;
}
