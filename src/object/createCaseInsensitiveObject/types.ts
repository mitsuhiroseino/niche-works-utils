import type { NormalizeStringOptions } from '../../string/normalizeString';
import type { CreateKeyTransformObjectOptionsBase } from '../createKeyTransformObject';

/**
 * オプション
 */
export type CreateCaseInsensitiveObjectOptions<T extends object> =
  NormalizeStringOptions & CreateKeyTransformObjectOptionsBase<T>;
