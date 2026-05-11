import * as R from 'remeda';

/**
 * 不正な日付型の値かどうかを判定\
 * 正しい日付型、および日付型以外はfalse
 * @param value 値
 * @returns
 */
export default function isInvalidDate(value: unknown): boolean {
  return R.isDate(value) && value.toString() === 'Invalid Date';
}
