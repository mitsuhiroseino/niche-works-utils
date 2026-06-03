import cycle from './cycle';

describe('cycle', () => {
  it('空配列', () => {
    const array: number[] = [];
    const result = cycle(array, 3);
    expect(result).toEqual([undefined, undefined, undefined]);
  });

  it('0周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, 0);
    expect(result).toEqual([]);
  });

  it('0.5周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, 2);
    expect(result).toEqual([0, 1]);
  });

  it('1周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, 4);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  it('1.5周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, 6);
    expect(result).toEqual([0, 1, 2, 3, 0, 1]);
  });

  it('2周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, 8);
    expect(result).toEqual([0, 1, 2, 3, 0, 1, 2, 3]);
  });

  it('-0.5周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, -2);
    expect(result).toEqual([3, 2]);
  });

  it('-1周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, -4);
    expect(result).toEqual([3, 2, 1, 0]);
  });

  it('-1.5周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, -6);
    expect(result).toEqual([3, 2, 1, 0, 3, 2]);
  });

  it('-2周', () => {
    const array = [0, 1, 2, 3];
    const result = cycle(array, -8);
    expect(result).toEqual([3, 2, 1, 0, 3, 2, 1, 0]);
  });

  describe('dataLast', () => {
    it('1.5周', () => {
      const array = [0, 1, 2, 3];
      const result = cycle.dataLast(6)(array);
      expect(result).toEqual([0, 1, 2, 3, 0, 1]);
    });

    it('-0.5周', () => {
      const array = [0, 1, 2, 3];
      const result = cycle.dataLast(-2)(array);
      expect(result).toEqual([3, 2]);
    });
  });
});
