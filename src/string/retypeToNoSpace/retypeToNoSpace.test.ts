import retypeToNoSpace from './retypeToNoSpace';

describe('retypeToNoSpace', () => {
  it('半角スペースを削除する', () => {
    expect(retypeToNoSpace('a b c')).toBe('abc');
  });

  it('全角スペースを削除する', () => {
    expect(retypeToNoSpace('a　b')).toBe('ab');
  });

  it('タブを削除する', () => {
    expect(retypeToNoSpace('a\tb')).toBe('ab');
  });

  it('スペースがない場合はそのまま返す', () => {
    expect(retypeToNoSpace('hello')).toBe('hello');
  });

  it('空文字はそのまま返す', () => {
    expect(retypeToNoSpace('')).toBe('');
  });
});
