/**
 * 配列の全ての要素を別の配列に追加する。
 * 追加先配列がない場合は新しい配列を返す。
 * @param data 追加先配列
 * @param source 追加する要素を持つ配列
 * @returns 要素を追加した配列
 */
const pushAllMutable = <T>(data: T[], source: T[]) =>
  _pushAllMutable(data, source);
pushAllMutable.dataLast =
  <T>(source: T[]) =>
  (data: T[]) =>
    _pushAllMutable(data, source);
export default pushAllMutable;

function _pushAllMutable<T>(data: T[], source: T[]): T[] {
  if (data && source) {
    data.push(...source);
  }
  return data;
}
