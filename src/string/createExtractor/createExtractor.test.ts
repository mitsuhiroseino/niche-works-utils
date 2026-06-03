import createExtractor from './createExtractor';

describe('createExtractor', () => {
  describe('default', () => {
    it('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}{{ABC}}',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    it('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }${ABC}',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    it('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom(
        '[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ][ABC]',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    it('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom(
        '|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ ||ABC|',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    it('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom(
        '★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★★ABC★',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
  });

  describe('keepDelimiters=true', () => {
    it('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}',
        { keepDelimiters: true },
      );
      expect(result).toEqual(['{{ABC}}', '{{ HIJ}}', '{{XYZ }}']);
    });
    it('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }',
        { keepDelimiters: true },
      );
      expect(result).toEqual(['${ABC}', '${ HIJ}', '${XYZ }']);
    });
    it('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom('[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ]', {
        keepDelimiters: true,
      });
      expect(result).toEqual(['[ABC]', '[ HIJ]', '[XYZ ]']);
    });
    it('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom('|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ |', {
        keepDelimiters: true,
      });
      expect(result).toEqual(['|ABC|', '| HIJ|', '|XYZ |']);
    });
    it('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom('★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★', {
        keepDelimiters: true,
      });
      expect(result).toEqual(['★ABC★', '★ HIJ★', '★XYZ ★']);
    });
  });

  describe('trim=true', () => {
    it('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}',
        { trim: true },
      );
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    it('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }',
        { trim: true },
      );
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    it('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom('[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ]', {
        trim: true,
      });
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    it('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom('|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ |', {
        trim: true,
      });
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    it('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom('★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★', {
        trim: true,
      });
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
  });

  describe('マッチなし', () => {
    it('デリミタが含まれない文字列は空配列を返す', () => {
      const extract = createExtractor(['{{', '}}']);
      expect(extract('no placeholders here')).toEqual([]);
    });

    it('空文字は空配列を返す', () => {
      const extract = createExtractor(['{{', '}}']);
      expect(extract('')).toEqual([]);
    });
  });

  describe('unique=true', () => {
    it('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}{{ABC}}',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    it('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }${ABC}',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    it('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom(
        '[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ][ABC]',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    it('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom(
        '|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ ||ABC|',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    it('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom(
        '★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★★ABC★',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
  });
});
