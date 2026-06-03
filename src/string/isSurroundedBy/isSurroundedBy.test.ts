import isSurroundedBy from './isSurroundedBy';

describe('isSurroundedBy', () => {
  describe('prefix === suffix', () => {
    it('true', () => {
      const result = isSurroundedBy('"abc"', '"');
      expect(result).toBe(true);
    });
    it('false', () => {
      const result = isSurroundedBy('"abc"', "'");
      expect(result).toBe(false);
    });
  });
  describe('prefix !== suffix', () => {
    it('true', () => {
      const result = isSurroundedBy('{abc}', '{', '}');
      expect(result).toBe(true);
    });
    it('false', () => {
      const result = isSurroundedBy('[abc]', '{', '}');
      expect(result).toBe(false);
    });
  });

  it('prefix+suffix以下の長さの場合はfalse', () => {
    expect(isSurroundedBy('""', '"')).toBe(false);
  });

  it('空文字はfalse', () => {
    expect(isSurroundedBy('', '"')).toBe(false);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(isSurroundedBy.dataLast('"')('"abc"')).toBe(true);
    });
  });
});
