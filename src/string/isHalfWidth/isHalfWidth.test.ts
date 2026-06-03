import isHalfWidth from './isHalfWidth';

describe('isHalfWidth', () => {
  it('半角文字はtrueを返す', () => {
    expect(isHalfWidth('abc')).toBe(true);
    expect(isHalfWidth('123')).toBe(true);
    expect(isHalfWidth('ｱｲｳ')).toBe(true);
  });

  it('全角文字が含まれるとfalseを返す', () => {
    expect(isHalfWidth('あいう')).toBe(false);
    expect(isHalfWidth('Ａ')).toBe(false);
    expect(isHalfWidth('abc漢')).toBe(false);
  });

  it('空文字はtrueを返す', () => {
    expect(isHalfWidth('')).toBe(true);
  });

  it('文字列でない場合はfalseを返す', () => {
    expect(isHalfWidth(123 as any)).toBe(false);
  });
});
