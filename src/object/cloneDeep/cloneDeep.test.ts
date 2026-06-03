import cloneDeep from './cloneDeep';

describe('cloneDeep', () => {
  it('プリミティブはそのまま返す', () => {
    expect(cloneDeep(42)).toBe(42);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(null)).toBeNull();
  });

  it('オブジェクトをディープコピーする', () => {
    const obj = { a: { b: 1 } };
    const clone = cloneDeep(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.a).not.toBe(obj.a);
  });

  it('配列をディープコピーする', () => {
    const arr = [1, [2, 3]];
    const clone = cloneDeep(arr);
    expect(clone).toEqual(arr);
    expect(clone).not.toBe(arr);
    expect(clone[1]).not.toBe(arr[1]);
  });

  it('Dateをコピーする', () => {
    const date = new Date('2024-01-01');
    const clone = cloneDeep(date);
    expect(clone.getTime()).toBe(date.getTime());
    expect(clone).not.toBe(date);
  });
});
