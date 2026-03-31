import isBlank from '../isBlank';
import isEmptyCollection from '../isEmptyCollection';
import type { IsEmptyValueOptions } from './types';

export default function isEmpty(
  value: unknown,
  options: IsEmptyValueOptions = {},
): boolean {
  if (isBlank(value, options)) {
    return true;
  }
  return isEmptyCollection(value);
}
