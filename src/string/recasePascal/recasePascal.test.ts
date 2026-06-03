import recasePascal from './recasePascal';

describe('recasePascal', () => {
  it('スネークケース → パスカルケース', () => {
    expect(recasePascal('hello_world')).toBe('HelloWorld');
  });

  it('ケバブケース → パスカルケース', () => {
    expect(recasePascal('hello-world')).toBe('HelloWorld');
  });

  it('キャメルケース → パスカルケース', () => {
    expect(recasePascal('helloWorld')).toBe('HelloWorld');
  });

  it('スペース区切り → パスカルケース', () => {
    expect(recasePascal('hello world')).toBe('HelloWorld');
  });

  it('空文字', () => {
    expect(recasePascal('')).toBe('');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(recasePascal.dataLast()('hello_world')).toBe('HelloWorld');
    });
  });
});
