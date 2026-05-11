/**
 * 安全ではない型変換を行う。\
 * 戻り値の型は型推論で決定する。\
 * 管理の都合上`as any`を様々な場所で行いたくない場合に利用する。\
 * unsafeCastでgrepすることで安全でない変換を行っている箇所をリストアップできるようになる。\
 * ごく僅かとはいえランタイムに影響があるので乱用は控えた方が良い。
 *
 * @param value
 * @returns
 */
export default function unsafeCast<T>(value: unknown): T {
  return value as T;
}
