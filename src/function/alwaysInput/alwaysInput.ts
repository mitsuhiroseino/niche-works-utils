/**
 * 第一引数に渡した値をそのまま返す
 */
export default function alwaysInput<T>(value: T, ..._args: unknown[]): T {
  return value;
}
