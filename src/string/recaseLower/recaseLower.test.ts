import recaseLower from './recaseLower';

describe('recaseLower', () => {
  it('大文字 → 小文字', () => {
    expect(recaseLower('Hello World')).toBe('hello world');
  });

  it('全て大文字', () => {
    expect(recaseLower('ABC')).toBe('abc');
  });

  it('小文字はそのまま', () => {
    expect(recaseLower('abc')).toBe('abc');
  });

  it('空文字', () => {
    expect(recaseLower('')).toBe('');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(recaseLower.dataLast()('Hello')).toBe('hello');
    });
  });
});
