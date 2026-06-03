import isWithinRange from '../isWithinRange';

/**
 * 値が範囲外の場合は最小値を返す
 * @param value 値
 * @param min 最小値
 * @param max 最大値
 * @returns 最小値から最大値の間の値
 */
const rangeMin = (value: number, min: number, max: number) =>
  _rangeMin(value, min, max);
rangeMin.dataLast =
  (min: number, max: number) =>
  (value: number) =>
    _rangeMin(value, min, max);
export default rangeMin;

function _rangeMin(value: number, min: number, max: number) {
  return isWithinRange(value, min, max) ? value : min;
}
