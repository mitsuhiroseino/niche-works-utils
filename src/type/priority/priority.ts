import kind from '../../type/kind';
import type { PriorityOptions } from './types';

const DEFAULT_PRIORITY_MAP = {
  undefined: -2,
  null: -1,
};

/**
 * 値の型に応じた優先度を返す
 * デフォルトでは値の型がundefinedは-2、nullは-1、それ以外は0
 * @param data 値
 * @param options オプション
 * @returns 優先度
 */
const priority = (data: unknown, options?: PriorityOptions): number =>
  _priority(data, options);
priority.dataLast = (options?: PriorityOptions) => (data: unknown) =>
  priority(data, options);
export default priority;

function _priority(data: unknown, options: PriorityOptions = {}): number {
  const priorityMap = options.priorityMap ?? DEFAULT_PRIORITY_MAP;
  if (data === undefined) {
    return priorityMap['undefined'] ?? 0;
  } else if (data === null) {
    return priorityMap['null'] ?? 0;
  } else {
    let result: number | undefined;
    if (options.kind) {
      result = priorityMap[kind(data)];
    } else {
      result = priorityMap[typeof data];
    }
    if (result === undefined) {
      result = options.getFallbackPriority?.(data) ?? 0;
    }
    return result;
  }
}
