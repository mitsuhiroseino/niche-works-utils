/**
 * 安全でない型変換を行う\
 * unsafeCastでgrepすることで安全でない変換を行っている箇所をリストアップできるようにする為のもの
 * @param value
 * @returns
 */
export default function unsafeCast<T>(value: unknown): T {
  return value as T;
}
