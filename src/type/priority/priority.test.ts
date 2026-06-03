import priority from './priority';

describe('priority', () => {
  it('undefinedは-2', () => {
    expect(priority(undefined)).toBe(-2);
  });

  it('nullは-1', () => {
    expect(priority(null)).toBe(-1);
  });

  it('その他の値は0', () => {
    expect(priority(42)).toBe(0);
    expect(priority('hello')).toBe(0);
    expect(priority({})).toBe(0);
  });

  describe('priorityMap', () => {
    it('カスタム優先度マップ', () => {
      expect(priority(undefined, { priorityMap: { undefined: 0, null: 1 } })).toBe(0);
      expect(priority(null, { priorityMap: { undefined: 0, null: 1 } })).toBe(1);
    });

    it('priorityMapに対応するキーがない場合は0を返す', () => {
      expect(priority(undefined, { priorityMap: { null: -1 } })).toBe(0);
      expect(priority(null, { priorityMap: { undefined: -2 } })).toBe(0);
    });
  });

  describe('kind オプション', () => {
    it('kind で型別優先度を指定', () => {
      expect(priority([], { kind: true, priorityMap: { undefined: -2, null: -1, array: 5 } })).toBe(5);
    });
  });

  describe('getFallbackPriority', () => {
    it('フォールバック優先度', () => {
      expect(priority('hello', { getFallbackPriority: () => 10 })).toBe(10);
    });
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(priority.dataLast()(undefined)).toBe(-2);
    });
  });
});
