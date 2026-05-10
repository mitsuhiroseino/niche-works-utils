import type { LooseRecord } from '@niche-works/types';

/**
 * 分配するプロパティの情報
 * 分配先のグループに対応する値がnullの場合は、
 * 対象のグループに分配されなかったプロパティを返す
 *
 * @param group 分配先のグループ
 */
export type DistributeRules<T extends LooseRecord> = {
  [group: string]: DistributePropertyMap<T> | DistributePropertyList<T> | null;
};

/**
 * 取得元 & 分配先のプロパティ名の情報(オブジェクト形式)
 */
export type DistributePropertyMap<T extends LooseRecord> = {
  /**
   * @param property 対象のプロパティ
   * @param value 分配の有無 or 分配先でのプロパティ名
   */
  [property in keyof T]: boolean | PropertyKey;
};

/**
 * 取得元 & 分配先のプロパティ名の情報(配列形式)
 */
export type DistributePropertyList<T extends LooseRecord> = (keyof T)[];

export type DistributeOptions = {
  /**
   * 継承されたプロパティも分配対象とする
   */
  includeInherited?: boolean;

  /**
   * 複製した値を分配する
   */
  cloneValue?: boolean;
};

/**
 * 分配した結果
 */
export type DistributeResult<
  T extends LooseRecord,
  R extends DistributeRules<T>,
> = {
  [G in keyof R]: R[G] extends null
    ? // nullの場合は残ったものなので全ての可能性がある
      Partial<T>
    : {
        [P in keyof R[G] as R[G][P] extends string
          ? R[G][P]
          : P extends keyof T
            ? P
            : never]: P extends keyof T ? T[P] : unknown;
      };
};
