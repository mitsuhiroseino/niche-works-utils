import _createContainer from '../../_internal/_createContainer';
import _parsePath from '../../_internal/_parsePath';

/**
 * オブジェクトから指定のパスの値を削除する（破壊的変更）
 * @param data 削除対象のオブジェクト
 * @param path 削除するプロパティのパス（例: 'a.b.0' または ['a', 'b', 0]）
 * @returns 削除された同じオブジェクト
 */
const unset = <T extends object>(data: T, path: string | PropertyKey[]) =>
  _unset(data, path);
unset.dataLast =
  <T extends object>(path: string | PropertyKey[]) =>
  (data: T) =>
    _unset(data, path);
export default unset;

function _unset<T extends object>(data: T, path: string | PropertyKey[]): T {
  const segments = _parsePath(path);
  const length = segments.length;
  let current: any = data;

  for (let i = 0; i < length; i++) {
    const key = segments[i];
    if (i === length - 1) {
      delete current[key];
    } else if (current[key] == null) {
      break;
    } else {
      current = current[key];
    }
  }
  return data;
}
