import recaseSnake from './recaseSnake';

describe('recaseSnake', () => {
  it('キャメルケース → スネークケース', () => {
    expect(recaseSnake('helloWorld')).toBe('hello_world');
  });

  it('ケバブケース → スネークケース', () => {
    expect(recaseSnake('hello-world')).toBe('hello_world');
  });

  it('パスカルケース → スネークケース', () => {
    expect(recaseSnake('HelloWorld')).toBe('hello_world');
  });

  it('スペース区切り → スネークケース', () => {
    expect(recaseSnake('hello world')).toBe('hello_world');
  });

  it('空文字', () => {
    expect(recaseSnake('')).toBe('');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(recaseSnake.dataLast()('helloWorld')).toBe('hello_world');
    });
  });
});
