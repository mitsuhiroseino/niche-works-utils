import createUtcDate from './createUtcDate';

describe('createUtcDate', () => {
  it('UTC日付を作成する', () => {
    const date = createUtcDate(2024, 0, 1); // 2024年1月1日
    expect(date.getUTCFullYear()).toBe(2024);
    expect(date.getUTCMonth()).toBe(0);
    expect(date.getUTCDate()).toBe(1);
  });

  it('時刻を指定してUTC日付を作成する', () => {
    const date = createUtcDate(2024, 5, 15, 10, 30, 45, 500);
    expect(date.getUTCFullYear()).toBe(2024);
    expect(date.getUTCMonth()).toBe(5);
    expect(date.getUTCDate()).toBe(15);
    expect(date.getUTCHours()).toBe(10);
    expect(date.getUTCMinutes()).toBe(30);
    expect(date.getUTCSeconds()).toBe(45);
    expect(date.getUTCMilliseconds()).toBe(500);
  });

  it('Dateインスタンスを返す', () => {
    expect(createUtcDate(2024, 0, 1)).toBeInstanceOf(Date);
  });
});
