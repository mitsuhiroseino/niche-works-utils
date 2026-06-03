import maybeHasOwn from './maybeHasOwn';

describe('maybeHasOwn', () => {
  it('存在するプロパティはtrue', () => {
    expect(maybeHasOwn({ a: 1 }, 'a')).toBe(true);
  });

  it('存在しないプロパティはfalse', () => {
    expect(maybeHasOwn({ a: 1 }, 'b')).toBe(false);
  });

  it('値がundefinedのプロパティもtrue', () => {
    expect(maybeHasOwn({ a: undefined }, 'a')).toBe(true);
  });

  it('継承されたプロパティはfalse', () => {
    const obj = Object.create({ inherited: true });
    expect(maybeHasOwn(obj, 'inherited')).toBe(false);
  });

  it('nullの場合はfalse', () => {
    expect(maybeHasOwn(null, 'a')).toBe(false);
  });
});
