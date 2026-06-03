import type { SwapPairsResult } from './types';

/**
 * タプルの配列を受け取り、各要素の [0] と [1] を入れ替える
 */
const swapPairs = <const T extends [unknown, unknown][]>(
  pairs: T,
): SwapPairsResult<T> => _swapPairs(pairs);
swapPairs.dataLast =
  () =>
  <const T extends [unknown, unknown][]>(pairs: T): SwapPairsResult<T> =>
    _swapPairs(pairs);
export default swapPairs;

function _swapPairs<const T extends [unknown, unknown][]>(
  pairs: T,
): SwapPairsResult<T> {
  return pairs.map(([first, second]) => [second, first]) as SwapPairsResult<T>;
}
