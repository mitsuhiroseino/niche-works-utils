import rotateArray from './rotateArray';

describe('rotateArray', () => {
  it('default(1件)', () => {
    const array = [0, 1, 2, 3, 4];
    const result = rotateArray(array);
    expect(result).toEqual([1, 2, 3, 4, 0]);
  });
  it('複数件', () => {
    const array = [0, 1, 2, 3, 4];
    const result = rotateArray(array, { count: 3 });
    expect(result).toEqual([3, 4, 0, 1, 2]);
  });
  it('0件', () => {
    const array = [0, 1, 2, 3, 4];
    const result = rotateArray(array, { count: 0 });
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
  it('配列の要素数以上', () => {
    const array = [0, 1, 2, 3, 4];
    const result = rotateArray(array, { count: 8 });
    expect(result).toEqual([3, 4, 0, 1, 2]);
  });

  describe('inplace', () => {
    it('元の配列を破壊的に変更する', () => {
      const array = [0, 1, 2, 3, 4];
      const result = rotateArray(array, { count: 2, inplace: true });
      expect(result).toBe(array);
      expect(array).toEqual([2, 3, 4, 0, 1]);
    });

    it('count: 0のとき元の配列をそのまま返す', () => {
      const array = [0, 1, 2, 3, 4];
      const result = rotateArray(array, { count: 0, inplace: true });
      expect(result).toBe(array);
    });
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = rotateArray.dataLast({ count: 2 })([0, 1, 2, 3, 4]);
      expect(result).toEqual([2, 3, 4, 0, 1]);
    });
  });
});
