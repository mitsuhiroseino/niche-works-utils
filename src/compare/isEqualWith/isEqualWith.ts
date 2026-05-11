/**
 * カスタム比較関数。
 * 明示的に結果を返さない(undefined)場合は、デフォルトの再帰比較が行われる
 */
type Customizer = (
  value1: unknown,
  value2: unknown,
  indexOrKey?: PropertyKey | undefined,
  value1Parent?: unknown,
  value2Parent?: unknown,
) => boolean | undefined;

/**
 * 2つの値が等しいかどうかを深く比較する
 * customizerを渡すことで、特定の型やプロパティの比較ロジックをカスタマイズできる
 */
export default function isEqualWith(
  value: unknown,
  other: unknown,
  customizer: Customizer,
  key?: string | number,
  parent?: unknown,
  otherParent?: unknown,
): boolean {
  const result = customizer(value, other, key, parent, otherParent);
  if (result !== undefined) {
    return result;
  }

  if (Object.is(value, other)) {
    return true;
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) return false;
    for (let i = 0; i < value.length; i++) {
      if (!isEqualWith(value[i], other[i], customizer, i, value, other)) {
        return false;
      }
    }
    return true;
  }

  if (
    value !== null &&
    typeof value === 'object' &&
    other !== null &&
    typeof other === 'object'
  ) {
    if (value instanceof Date && other instanceof Date) {
      return value.getTime() === other.getTime();
    }

    const keys = Object.keys(value);
    const otherKeys = Object.keys(other);

    if (keys.length !== otherKeys.length) {
      return false;
    }

    for (const k of keys) {
      if (!Object.hasOwn(other, k)) {
        return false;
      }
      if (!isEqualWith(value[k], other[k], customizer, k, value, other)) {
        return false;
      }
    }
    return true;
  }

  return false;
}
