import type { ForEachValuesOptions } from '../forEachValues';

export type MaybeDefaultMutableOptions = ForEachValuesOptions & {
  /**
   * デフォルト値がnullの場合は処理しない
   */
  skipNull?: boolean;

  /**
   * 反映先のオブジェクトのプロパティ値がnullの場合にも設定する
   */
  overwriteNull?: boolean;
};
