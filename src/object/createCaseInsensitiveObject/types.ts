import type { FoldOptions } from '../../string/fold';
import type { CreateKeyTransformObjectOptionsBase } from '../createKeyTransformObject';

/**
 * オプション
 */
export type CreateCaseInsensitiveObjectOptions<T extends object> = FoldOptions &
  CreateKeyTransformObjectOptionsBase<T>;
