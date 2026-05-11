import type { LooseRecord } from '@niche-works/types';
import isEqualBy from '../../compare/isEqualBy';
import type { UpdateMutableOptions } from './types';

/**
 * valuesに設定された値でobjectを更新する
 * 値の変更が無いキーは更新しない
 * @param object 更新対象のオブジェクト
 * @param values 更新する値を持ったオブジェクト
 * @param options オプション
 * @returns 更新されたキーと以前の値
 */
export default function updateMutable<T extends LooseRecord>(
  object: T | null | undefined,
  values: Partial<T> | null | undefined,
  options?: UpdateMutableOptions,
): Partial<T> {
  const oldValues: Partial<T> = {};
  if (object && values) {
    for (const key in values) {
      if (Object.hasOwn(values, key)) {
        const value = values[key];
        const oldValue = object[key];
        if (!isEqualBy(oldValue, value, options)) {
          object[key] = value;
          oldValues[key] = oldValue;
        }
      }
    }
  }
  return oldValues;
}
