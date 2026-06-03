import isFullWidth from './isFullWidth';

describe('isFullWidth', () => {
  it('全角文字はtrueを返す', () => {
    expect(isFullWidth('あいう')).toBe(true);
    expect(isFullWidth('Ａ')).toBe(true);
    expect(isFullWidth('漢字')).toBe(true);
  });

  it('半角文字が含まれるとfalseを返す', () => {
    expect(isFullWidth('abc')).toBe(false);
    expect(isFullWidth('あa')).toBe(false);
    expect(isFullWidth('ｱ')).toBe(false);
  });

  it('空文字はfalseを返す', () => {
    expect(isFullWidth('')).toBe(false);
  });

  it('文字列でない場合はfalseを返す', () => {
    expect(isFullWidth(123 as any)).toBe(false);
  });
});
