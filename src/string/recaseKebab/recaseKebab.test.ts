import recaseKebab from './recaseKebab';

describe('recaseKebab', () => {
  it('スネークケース → ケバブケース', () => {
    expect(recaseKebab('hello_world')).toBe('hello-world');
  });

  it('キャメルケース → ケバブケース', () => {
    expect(recaseKebab('helloWorld')).toBe('hello-world');
  });

  it('パスカルケース → ケバブケース', () => {
    expect(recaseKebab('HelloWorld')).toBe('hello-world');
  });

  it('スペース区切り → ケバブケース', () => {
    expect(recaseKebab('hello world')).toBe('hello-world');
  });

  it('空文字', () => {
    expect(recaseKebab('')).toBe('');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(recaseKebab.dataLast()('hello_world')).toBe('hello-world');
    });
  });
});
