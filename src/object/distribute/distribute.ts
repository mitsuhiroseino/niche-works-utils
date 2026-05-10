import type { LooseRecord } from '@niche-works/types';
import * as R from 'remeda';
import unsafeCast from '../../type/unsafeCast';
import type {
  DistributeOptions,
  DistributeResult,
  DistributeRules,
} from './types';

/**
 * object直下のプロパティをrulesに従って分配する
 * @param data
 * @param rules
 * @param options
 */
export default function distribute<
  T extends LooseRecord,
  R extends DistributeRules<T>,
>(data: T, rules: R, options: DistributeOptions = {}): DistributeResult<T, R> {
  const { includeInherited, cloneValue } = options;
  const has = includeInherited
    ? (property) => property in data
    : (property) => Object.hasOwn(data, property);
  const get = cloneValue
    ? (property) => R.clone(data[property])
    : (property) => data[property];
  // 分配結果
  const result: Record<string, Record<PropertyKey, unknown>> = {};
  // 対象をrestにコピーし、分配できたものはrestから削除していく
  const rest = { ...data };
  const restGroupKeys: string[] = [];

  for (const groupKey in rules) {
    const group: LooseRecord = (result[groupKey] = {});
    const properties = rules[groupKey];
    if (properties == null) {
      // 分配できなかったプロパティを設定するグループ
      restGroupKeys.push(groupKey);
    } else if (Array.isArray(properties)) {
      // 指定のプロパティを対象のグループへ分配
      for (const property of properties) {
        if (has(property)) {
          // 元のプロパティ名でグループへ設定
          group[property] = get(property);
          delete rest[property];
        }
      }
    } else {
      // 指定のプロパティを対象のグループへ分配
      for (const property in properties) {
        if (has(property)) {
          const value = properties[property];
          if (value === true) {
            // 元のプロパティ名でグループへ設定
            group[property] = get(property);
            delete rest[property];
          } else if (value !== false) {
            // 指定のプロパティ名でグループへ設定
            group[unsafeCast<string>(value)] = get(property);
            delete rest[property];
          }
        }
      }
    }
  }
  if (restGroupKeys.length) {
    for (const groupKey of restGroupKeys) {
      // restの内容をグループへ設定
      result[groupKey] = { ...rest };
    }
  }

  return result as DistributeResult<T, R>;
}
