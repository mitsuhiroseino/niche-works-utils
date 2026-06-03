import recaseUpper from './recaseUpper';

describe('recaseUpper', () => {
  it('小文字 → 大文字', () => {
    expect(recaseUpper('hello world')).toBe('HELLO WORLD');
  });

  it('全て小文字', () => {
    expect(recaseUpper('abc')).toBe('ABC');
  });

  it('大文字はそのまま', () => {
    expect(recaseUpper('ABC')).toBe('ABC');
  });

  it('空文字', () => {
    expect(recaseUpper('')).toBe('');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(recaseUpper.dataLast()('hello')).toBe('HELLO');
    });
  });
});
