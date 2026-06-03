import pushAllMutable from './pushAllMutable';

describe('pushAllMutable', () => {
  it('全要素を追加する', () => {
    const target = [1, 2];
    pushAllMutable(target, [3, 4, 5]);
    expect(target).toEqual([1, 2, 3, 4, 5]);
  });

  it('空配列を追加しても変化しない', () => {
    const target = [1, 2];
    pushAllMutable(target, []);
    expect(target).toEqual([1, 2]);
  });

  it('空配列に追加する', () => {
    const target: number[] = [];
    pushAllMutable(target, [1, 2, 3]);
    expect(target).toEqual([1, 2, 3]);
  });

  it('元の配列を破壊的に変更する', () => {
    const target = [1, 2];
    const result = pushAllMutable(target, [3, 4]);
    expect(result).toBe(target);
  });

  it('dataがnullの場合はnullを返す', () => {
    const result = pushAllMutable(null as any, [1, 2, 3]);
    expect(result).toBeNull();
  });

  it('sourceがnullの場合は変更しない', () => {
    const result = pushAllMutable([1, 2] as any, null as any);
    expect(result).toEqual([1, 2]);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const target = [1, 2];
      pushAllMutable.dataLast([3, 4])(target);
      expect(target).toEqual([1, 2, 3, 4]);
    });
  });
});
