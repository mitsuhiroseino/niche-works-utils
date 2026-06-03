import comparePerformanceAsync from './comparePerformanceAsync';

describe('comparePerformanceAsync', () => {
  it('複数非同期関数の実行時間を比較してresultsとreturnValuesを返す', async () => {
    const result = await comparePerformanceAsync({
      targets: [
        { id: 'fn1', fn: async () => 1 },
        { id: 'fn2', fn: async () => 2 },
      ],
      tests: 2,
      iteration: 2,
    });
    expect(result.results).toHaveLength(2);
    expect(result.returnValues['fn1']).toBe(1);
    expect(result.returnValues['fn2']).toBe(2);
    expect(result.start).toBeInstanceOf(Date);
    expect(result.end).toBeInstanceOf(Date);
  });

  it('warmingUpを有効にしてもresultsが返る', async () => {
    const result = await comparePerformanceAsync({
      targets: [{ id: 'fn', fn: async () => 0 }],
      tests: 1,
      iteration: 1,
      warmingUp: true,
    });
    expect(result.results).toHaveLength(1);
  });
});
