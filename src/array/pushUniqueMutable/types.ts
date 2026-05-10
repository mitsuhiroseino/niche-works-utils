export type PushUniqueMutableOptions<T> = {
  /**
   * SetによるO(1)チェックに切り替える要素数の閾値。
   * デフォルト: 100
   */
  threshold?: number;

  /**
   * 同一性の判定ロジック。指定した場合はthresholdに関わらず線形探索になる。
   * デフォルト: `===`
   */
  comparator?: (a: T, b: T) => boolean;
};
