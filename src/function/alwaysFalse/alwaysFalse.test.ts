import alwaysFalse from './alwaysFalse';

describe('alwaysFalse', () => {
  it('常にfalseを返す', () => {
    expect(alwaysFalse()).toBe(false);
  });

  it('引数があってもfalseを返す', () => {
    expect(alwaysFalse(1, 'a', null)).toBe(false);
  });
});
