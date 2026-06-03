import recaseTitle from './recaseTitle';

describe('recaseTitle', () => {
  it('スペース区切り → タイトルケース', () => {
    expect(recaseTitle('hello world')).toBe('Hello World');
  });

  it('スネークケース → タイトルケース', () => {
    expect(recaseTitle('hello_world')).toBe('Hello World');
  });

  it('ケバブケース → タイトルケース', () => {
    expect(recaseTitle('hello-world')).toBe('Hello World');
  });

  it('空文字', () => {
    expect(recaseTitle('')).toBe('');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(recaseTitle.dataLast()('hello world')).toBe('Hello World');
    });
  });
});
