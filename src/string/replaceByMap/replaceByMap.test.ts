import replaceByMap from './replaceByMap';

describe('replaceByMap', () => {
  it('置換', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['ABC', '!!!'],
        ['M', '?'],
        ['YZ', '@@'],
      ]),
    );
    expect(result).toBe('!!!DEFGHIJKL?NOPQRSTUVWX@@');
  });
  it('sourceの文字列が長い方が有効', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['B', '_'],
        ['ABC', '!!!'],
        ['M', '?'],
        ['YZ', '@@'],
      ]),
    );
    expect(result).toBe('!!!DEFGHIJKL?NOPQRSTUVWX@@');
  });
  it('長さが変わる置換', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['ABC', '!'],
        ['M', '???'],
        ['YZ', ''],
      ]),
    );
    expect(result).toBe('!DEFGHIJKL???NOPQRSTUVWX');
  });
  it('置換された文字列の置換はしない', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['ABC', 'MYZ'],
        ['M', '?'],
        ['YZ', '@@'],
      ]),
    );
    expect(result).toBe('MYZDEFGHIJKL?NOPQRSTUVWX@@');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = replaceByMap.dataLast(new Map([['ABC', '!!!']]))(
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      );
      expect(result).toBe('!!!DEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });
});
