import alwaysInput from './alwaysInput';

describe('alwaysInput', () => {
  it('数値をそのまま返す', () => {
    expect(alwaysInput(42)).toBe(42);
  });

  it('文字列をそのまま返す', () => {
    expect(alwaysInput('hello')).toBe('hello');
  });

  it('nullをそのまま返す', () => {
    expect(alwaysInput(null)).toBeNull();
  });

  it('undefinedをそのまま返す', () => {
    expect(alwaysInput(undefined)).toBeUndefined();
  });

  it('オブジェクトをそのまま返す', () => {
    const obj = { a: 1 };
    expect(alwaysInput(obj)).toBe(obj);
  });

  it('第2引数以降は無視される', () => {
    expect(alwaysInput(1, 2, 3)).toBe(1);
  });
});
