import type { LooseRecord } from '@niche-works/types';
import maybeAssignMutable from '../maybeAssignMutable';
import type { MaybeAssignOptions } from './types';

/**
 * valuesにあるundefinedでない値のみtargetへ適用する
 * @param target
 * @param values
 * @param options
 * @returns
 */
export default function maybeAssign<
  T extends LooseRecord,
  V extends LooseRecord,
>(target: T, values: V, options: MaybeAssignOptions = {}): T & V {
  if (target && values) {
    return maybeAssignMutable({ ...target }, values, options);
  }
  return target as T & V;
}
