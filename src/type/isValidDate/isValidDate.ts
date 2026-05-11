import * as R from 'remeda';

/**
 * 正しい日付型の値かどうかを判定\
 * 不正な日付型、および日付型以外はfalse
 * @param value 値
 * @returns
 */
export default function isValidDate(value: unknown): boolean {
  return R.isDate(value) && value.toString() !== 'Invalid Date';
}
