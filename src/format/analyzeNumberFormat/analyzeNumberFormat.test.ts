import analyzeNumberFormat from './analyzeNumberFormat';

describe('analyzeNumberFormat', () => {
  it('undefinedを渡した場合はundefinedを返す', () => {
    expect(analyzeNumberFormat(undefined)).toBeUndefined();
  });

  it('整数フォーマット "#,##0" を正しく解析する', () => {
    const result = analyzeNumberFormat('#,##0');
    expect(result).toBeDefined();
    expect(result!.dp).toBe(false);
    expect(result!.ts).toBe(true);
    expect(result!.intNumLength).toBe(4);
    expect(result!.decNumLength).toBe(0);
    expect(result!.prefix).toBeUndefined();
    expect(result!.suffix).toBeUndefined();
  });

  it('小数フォーマット "#,##0.00" を正しく解析する', () => {
    const result = analyzeNumberFormat('#,##0.00');
    expect(result).toBeDefined();
    expect(result!.dp).toBe(true);
    expect(result!.ts).toBe(true);
    expect(result!.intNumLength).toBe(4);
    expect(result!.decNumLength).toBe(2);
  });

  it('prefix付きフォーマット "¥#,##0" を正しく解析する', () => {
    const result = analyzeNumberFormat('"¥"#,##0');
    expect(result!.prefix).toBe('¥');
  });

  it('suffix付きフォーマット "#,##0.00"円"" を正しく解析する', () => {
    const result = analyzeNumberFormat('#,##0.00"円"');
    expect(result!.suffix).toBe('円');
  });

  it('桁区切りなしフォーマット "0.000" を正しく解析する', () => {
    const result = analyzeNumberFormat('0.000');
    expect(result!.ts).toBe(false);
    expect(result!.dp).toBe(true);
    expect(result!.decNumLength).toBe(3);
  });

  it('シンプルな "0" フォーマットを解析する', () => {
    const result = analyzeNumberFormat('0');
    expect(result!.dp).toBe(false);
    expect(result!.ts).toBe(false);
    expect(result!.intNumLength).toBe(1);
  });

  it('整数フォーマットのsuffixを解析する', () => {
    const result = analyzeNumberFormat('#,##0"円"');
    expect(result!.dp).toBe(false);
    expect(result!.suffix).toBe('円');
  });

  it('連続するラベルをまとめて解析する', () => {
    const result = analyzeNumberFormat('"¥""yen"0');
    expect(result!.prefix).toBe('¥yen');
  });

  it('数値パターンがない場合は空の結果を返す', () => {
    const result = analyzeNumberFormat('xyz');
    expect(result).toBeDefined();
    expect(result!.intNumLength).toBe(0);
    expect(result!.decNumLength).toBe(0);
  });
});
