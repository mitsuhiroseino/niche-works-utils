import getRawType from './getRawType';

describe('getRawType', () => {
  it('null', () => {
    expect(getRawType(null)).toBe('[object Null]');
  });

  it('undefined', () => {
    expect(getRawType(undefined)).toBe('[object Undefined]');
  });

  it('数値', () => {
    expect(getRawType(42)).toBe('[object Number]');
  });

  it('文字列', () => {
    expect(getRawType('hello')).toBe('[object String]');
  });

  it('真偽値', () => {
    expect(getRawType(true)).toBe('[object Boolean]');
  });

  it('配列', () => {
    expect(getRawType([])).toBe('[object Array]');
  });

  it('オブジェクト', () => {
    expect(getRawType({})).toBe('[object Object]');
  });

  it('Date', () => {
    expect(getRawType(new Date())).toBe('[object Date]');
  });

  it('RegExp', () => {
    expect(getRawType(/pattern/)).toBe('[object RegExp]');
  });

  it('関数', () => {
    expect(getRawType(() => {})).toBe('[object Function]');
  });

  it('Map', () => {
    expect(getRawType(new Map())).toBe('[object Map]');
  });

  it('Set', () => {
    expect(getRawType(new Set())).toBe('[object Set]');
  });
});
