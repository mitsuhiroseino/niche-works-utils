import rotateArray from './rotateArray';

describe('rotateArray', () => {
  it('default(1件)', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array);
    expect(result).toEqual([1, 2, 3, 4, 0]);
  });
  it('複数件', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array, { count: 3 });
    expect(result).toEqual([3, 4, 0, 1, 2]);
  });
  it('0件', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array, { count: 0 });
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
  it('配列の要素数以上', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array, { count: 8 });
    expect(result).toEqual([3, 4, 0, 1, 2]);
  });
});
