import clearArray from './clearArray';

describe('clearArray', () => {
  it('全要素削除', () => {
    const array = [0, 1, 2, 3, 4];
    const result = clearArray(array);
    expect(array).toEqual([]);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it('配列でない値を渡した場合は空配列を返す', () => {
    expect(clearArray(null as any)).toEqual([]);
  });
});
