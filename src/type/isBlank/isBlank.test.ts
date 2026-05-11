import isBlank from './isBlank';

describe('isBlank', () => {
  it('undefined', () => {
    const result = isBlank(undefined);
    expect(result).toBe(true);
  });

  it('null', () => {
    const result = isBlank(null);
    expect(result).toBe(true);
  });

  describe("trimType==='none'", () => {
    it('空文字', () => {
      const result = isBlank('', { trimType: 'none' });
      expect(result).toBe(true);
    });

    it('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'none' });
      expect(result).toBe(false);
    });

    it('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'none' });
      expect(result).toBe(false);
    });

    it('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'none' });
      expect(result).toBe(false);
    });

    it('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'none' });
      expect(result).toBe(false);
    });

    it('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'none' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='half'", () => {
    it('空文字', () => {
      const result = isBlank('', { trimType: 'half' });
      expect(result).toBe(true);
    });

    it('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'half' });
      expect(result).toBe(true);
    });

    it('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'half' });
      expect(result).toBe(false);
    });

    it('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'half' });
      expect(result).toBe(false);
    });

    it('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'half' });
      expect(result).toBe(false);
    });

    it('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'half' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='full'", () => {
    it('空文字', () => {
      const result = isBlank('', { trimType: 'full' });
      expect(result).toBe(true);
    });

    it('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'full' });
      expect(result).toBe(false);
    });

    it('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'full' });
      expect(result).toBe(true);
    });

    it('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'full' });
      expect(result).toBe(false);
    });

    it('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'full' });
      expect(result).toBe(false);
    });

    it('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'full' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='both'", () => {
    it('空文字', () => {
      const result = isBlank('', { trimType: 'both' });
      expect(result).toBe(true);
    });

    it('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'both' });
      expect(result).toBe(true);
    });

    it('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'both' });
      expect(result).toBe(true);
    });

    it('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'both' });
      expect(result).toBe(true);
    });

    it('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'both' });
      expect(result).toBe(false);
    });

    it('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'both' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='all'", () => {
    it('空文字', () => {
      const result = isBlank('', { trimType: 'all' });
      expect(result).toBe(true);
    });

    it('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'all' });
      expect(result).toBe(true);
    });

    it('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'all' });
      expect(result).toBe(true);
    });

    it('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'all' });
      expect(result).toBe(true);
    });

    it('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'all' });
      expect(result).toBe(true);
    });

    it('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'all' });
      expect(result).toBe(false);
    });
  });
});
