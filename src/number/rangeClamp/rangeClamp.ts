/**
 * 値がmin以下の場合はmin、max以上の場合はmax、それ以外の場合はvalueを返す
 * @param value 値
 * @param min 最小値
 * @param max 最大値
 * @returns 最小値から最大値の間の値
 */
const rangeClamp = (value: number, min: number, max: number) =>
  _rangeClamp(value, min, max);
rangeClamp.dataLast =
  (min: number, max: number) =>
  (value: number) =>
    _rangeClamp(value, min, max);
export default rangeClamp;

function _rangeClamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
