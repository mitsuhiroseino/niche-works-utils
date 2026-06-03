import { ComparisonOperator, ComparisonStrategies } from './constants';
import type { LeftType, RightType } from './types';

/**
 * 2つの値を指定された演算子で比較する。
 * @param left - 比較する左辺の値
 * @param operator - 演算子 (COMPARISON_OPERATORS の値)
 * @param right - 比較する右辺の値（between/inの場合は配列）
 */
const compare = <O extends ComparisonOperator>(
  left: LeftType[O],
  operator: O,
  right: RightType[O],
): boolean => _compare(left, operator, right);
compare.dataLast =
  <O extends ComparisonOperator>(operator: O, right: RightType[O]) =>
  (left: LeftType[O]): boolean =>
    _compare(left, operator, right);
export default compare;

function _compare<O extends ComparisonOperator>(
  left: LeftType[O],
  operator: O,
  right: RightType[O],
): boolean {
  const strategy = ComparisonStrategies[operator];
  if (!strategy) {
    throw new Error(`[compare] Unsupported operator: ${operator}`);
  }

  return strategy(left, right);
}
