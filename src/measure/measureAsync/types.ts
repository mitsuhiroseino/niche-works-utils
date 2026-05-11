import type { MeasureOptions, MeasureReturnValue } from '../measure';

/**
 * measureAsync関数のオプション
 */
export type MeasureAsyncOptions<A extends unknown[] = unknown[]> =
  MeasureOptions<A>;

/**
 * measureAsync関数の戻り値
 */
export type MeasureAsyncReturnValue<R = unknown> = MeasureReturnValue<R>;
