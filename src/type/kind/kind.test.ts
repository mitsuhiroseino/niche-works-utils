import kind from './kind';

describe('kind', () => {
  it('undefined', () => {
    expect(kind(undefined)).toBe('undefined');
  });

  it('null', () => {
    expect(kind(null)).toBe('null');
  });

  it('boolean', () => {
    expect(kind(true)).toBe('boolean');
    expect(kind(false)).toBe('boolean');
  });

  it('number', () => {
    expect(kind(42)).toBe('number');
    expect(kind(0)).toBe('number');
  });

  it('string', () => {
    expect(kind('hello')).toBe('string');
    expect(kind('')).toBe('string');
  });

  it('bigint', () => {
    expect(kind(42n)).toBe('bigint');
  });

  it('symbol', () => {
    expect(kind(Symbol())).toBe('symbol');
  });

  it('function', () => {
    expect(kind(() => {})).toBe('function');
  });

  it('array', () => {
    expect(kind([])).toBe('array');
    expect(kind([1, 2, 3])).toBe('array');
  });

  it('plainobject', () => {
    expect(kind({})).toBe('plainobject');
    expect(kind({ a: 1 })).toBe('plainobject');
  });

  it('date', () => {
    expect(kind(new Date())).toBe('date');
  });

  it('regexp', () => {
    expect(kind(/pattern/)).toBe('regexp');
  });

  it('error', () => {
    expect(kind(new Error())).toBe('error');
  });

  it('map', () => {
    expect(kind(new Map())).toBe('map');
  });

  it('set', () => {
    expect(kind(new Set())).toBe('set');
  });

  it('promise', () => {
    expect(kind(Promise.resolve())).toBe('promise');
  });

  it('weakmap', () => {
    expect(kind(new WeakMap())).toBe('weakmap');
  });

  it('weakset', () => {
    expect(kind(new WeakSet())).toBe('weakset');
  });

  it('arraybuffer', () => {
    expect(kind(new ArrayBuffer(0))).toBe('arraybuffer');
  });

  it('sharedarraybuffer', () => {
    expect(kind(new SharedArrayBuffer(0))).toBe('sharedarraybuffer');
  });

  it('クラスインスタンス（plainobjectでないobject）', () => {
    class MyClass {}
    expect(kind(new MyClass())).toBe('object');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(kind.dataLast()(42)).toBe('number');
    });
  });
});
