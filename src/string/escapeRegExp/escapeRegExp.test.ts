import escapeRegExp from './escapeRegExp';

describe('escapeRegExp', () => {
  it('特殊文字なし', () => {
    expect(escapeRegExp('hello')).toBe('hello');
  });

  it('ドット', () => {
    expect(escapeRegExp('a.b')).toBe('a\\.b');
  });

  it('アスタリスク', () => {
    expect(escapeRegExp('a*b')).toBe('a\\*b');
  });

  it('プラス', () => {
    expect(escapeRegExp('a+b')).toBe('a\\+b');
  });

  it('疑問符', () => {
    expect(escapeRegExp('a?b')).toBe('a\\?b');
  });

  it('キャレット', () => {
    expect(escapeRegExp('a^b')).toBe('a\\^b');
  });

  it('ドル記号', () => {
    expect(escapeRegExp('a$b')).toBe('a\\$b');
  });

  it('波括弧', () => {
    expect(escapeRegExp('a{1,3}')).toBe('a\\{1,3\\}');
  });

  it('角括弧', () => {
    expect(escapeRegExp('[abc]')).toBe('\\[abc\\]');
  });

  it('パイプ', () => {
    expect(escapeRegExp('a|b')).toBe('a\\|b');
  });

  it('丸括弧', () => {
    expect(escapeRegExp('(abc)')).toBe('\\(abc\\)');
  });

  it('バックスラッシュ', () => {
    expect(escapeRegExp('a\\b')).toBe('a\\\\b');
  });

  it('正規表現として使用できること', () => {
    const input = 'a.b*c';
    const escaped = escapeRegExp(input);
    const regex = new RegExp(escaped);
    expect(regex.test(input)).toBe(true);
    expect(regex.test('aXbXc')).toBe(false);
  });
});
