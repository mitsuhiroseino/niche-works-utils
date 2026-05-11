import type { ForEachValuesOptions } from '../forEachValues';

export type MaybeAssignMutableOptions = ForEachValuesOptions & {
  /**
   * 反映元の値がnullの場合は処理しない
   */
  skipNull?: boolean;
};
