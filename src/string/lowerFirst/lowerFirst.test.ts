import lowerFirst from './lowerFirst';

describe('lowerFirst', () => {
  it('先頭小文字', () => {
    const result = lowerFirst('abc');
    expect(result).toBe('abc');
  });
  it('先頭大文字', () => {
    const result = lowerFirst('Abc');
    expect(result).toBe('abc');
  });
  it('1文字', () => {
    const result = lowerFirst('A');
    expect(result).toBe('a');
  });
  it('空文字', () => {
    const result = lowerFirst('');
    expect(result).toBe('');
  });
  it('null', () => {
    const result = lowerFirst(null as any);
    expect(result).toBe(null);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(lowerFirst.dataLast()('Abc')).toBe('abc');
    });
  });
});
