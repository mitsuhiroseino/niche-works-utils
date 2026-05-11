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
});
