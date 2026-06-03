import type { NormalizeStringOptions } from '../../string/normalizeString';

/**
 * オプション
 */
export type GetByNormalizedKeyOptions = Omit<
  NormalizeStringOptions,
  'ignoreCase'
> & {
  /**
   * 大文字小文字を区別する
   * @default false
   */
  caseSensitive?: boolean;
};
