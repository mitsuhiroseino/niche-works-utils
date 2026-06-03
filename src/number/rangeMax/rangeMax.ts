import isWithinRange from '../isWithinRange';

/**
 * 値が範囲外の場合は最大値を返す
 * @param value 値
 * @param min 最小値
 * @param max 最大値
 * @returns 最小値から最大値の間の値
 */
const rangeMax = (value: number, min: number, max: number) =>
  _rangeMax(value, min, max);
rangeMax.dataLast =
  (min: number, max: number) =>
  (value: number) =>
    _rangeMax(value, min, max);
export default rangeMax;

function _rangeMax(value: number, min: number, max: number) {
  return isWithinRange(value, min, max) ? value : max;
}
