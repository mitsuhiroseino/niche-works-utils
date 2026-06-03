import isWithinRange from '../isWithinRange';

/**
 * 値が範囲外の場合はデフォルト値を返す
 * @param value 値
 * @param min 最小値
 * @param max 最大値
 * @param defaultValue デフォルト値
 * @returns 最小値から最大値の間の値
 */
const rangeDefault = (value: number, min: number, max: number, defaultValue: number) =>
  _rangeDefault(value, min, max, defaultValue);
rangeDefault.dataLast =
  (min: number, max: number, defaultValue: number) =>
  (value: number) =>
    _rangeDefault(value, min, max, defaultValue);
export default rangeDefault;

function _rangeDefault(
  value: number,
  min: number,
  max: number,
  defaultValue: number,
) {
  return isWithinRange(value, min, max) ? value : defaultValue;
}
