import isPrimitive from './isPrimitive';

describe('isPrimitive', () => {
  it('nullはtrue', () => {
    expect(isPrimitive(null)).toBe(true);
  });

  it('undefinedはtrue', () => {
    expect(isPrimitive(undefined)).toBe(true);
  });

  it('文字列はtrue', () => {
    expect(isPrimitive('hello')).toBe(true);
    expect(isPrimitive('')).toBe(true);
  });

  it('数値はtrue', () => {
    expect(isPrimitive(42)).toBe(true);
    expect(isPrimitive(0)).toBe(true);
  });

  it('真偽値はtrue', () => {
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
  });

  it('BigIntはtrue', () => {
    expect(isPrimitive(42n)).toBe(true);
  });

  it('Symbolはtrue', () => {
    expect(isPrimitive(Symbol())).toBe(true);
  });

  it('オブジェクトはfalse', () => {
    expect(isPrimitive({})).toBe(false);
  });

  it('配列はfalse', () => {
    expect(isPrimitive([])).toBe(false);
  });

  it('関数はfalse', () => {
    expect(isPrimitive(() => {})).toBe(false);
  });

  it('Dateはfalse', () => {
    expect(isPrimitive(new Date())).toBe(false);
  });
});
