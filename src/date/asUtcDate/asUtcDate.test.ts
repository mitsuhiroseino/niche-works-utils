import asUtcDate from './asUtcDate';

describe('asUtcDate', () => {
  it('ローカル日時と同じUTC日時を持つDateを返す', () => {
    const local = new Date(2024, 0, 15, 10, 30, 45, 500);
    const utc = asUtcDate(local);

    expect(utc.getUTCFullYear()).toBe(local.getFullYear());
    expect(utc.getUTCMonth()).toBe(local.getMonth());
    expect(utc.getUTCDate()).toBe(local.getDate());
    expect(utc.getUTCHours()).toBe(local.getHours());
    expect(utc.getUTCMinutes()).toBe(local.getMinutes());
    expect(utc.getUTCSeconds()).toBe(local.getSeconds());
    expect(utc.getUTCMilliseconds()).toBe(local.getMilliseconds());
  });

  it('Dateインスタンスを返す', () => {
    expect(asUtcDate(new Date())).toBeInstanceOf(Date);
  });
});
