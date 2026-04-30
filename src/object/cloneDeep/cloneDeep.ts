import { klona } from 'klona/full';

/**
 * 深いコピーをする
 * klona/fullそのもの
 * @param value
 * @returns
 */
export default function cloneDeep<T>(value: T): T {
  return klona(value);
}
