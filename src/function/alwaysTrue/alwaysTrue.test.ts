import alwaysTrue from './alwaysTrue';

describe('alwaysTrue', () => {
  it('常にtrueを返す', () => {
    expect(alwaysTrue()).toBe(true);
  });

  it('引数があってもtrueを返す', () => {
    expect(alwaysTrue(1, 'a', null)).toBe(true);
  });
});
