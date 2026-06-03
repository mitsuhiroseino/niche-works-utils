import alwaysVoid from './alwaysVoid';

describe('alwaysVoid', () => {
  it('undefinedを返す', () => {
    expect(alwaysVoid()).toBeUndefined();
  });

  it('引数があってもundefinedを返す', () => {
    expect(alwaysVoid(1, 'a', null)).toBeUndefined();
  });
});
