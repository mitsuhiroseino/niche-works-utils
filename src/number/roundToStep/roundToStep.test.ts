import roundToStep from './roundToStep';

describe('roundToStep', () => {
  it('刻み幅1で四捨五入', () => {
    expect(roundToStep(3.7, 1)).toBe(4);
  });

  it('刻み幅0.5で四捨五入', () => {
    expect(roundToStep(3.7, 0.5)).toBe(3.5);
  });

  it('刻み幅10で四捨五入', () => {
    expect(roundToStep(35, 10)).toBe(40);
  });

  it('ちょうど刻み幅の倍数', () => {
    expect(roundToStep(4, 2)).toBe(4);
  });

  it('刻み幅の半分以下は切り捨て', () => {
    expect(roundToStep(3.2, 0.5)).toBe(3);
  });

  it('刻み幅の半分は切り上げ', () => {
    expect(roundToStep(3.25, 0.5)).toBe(3.5);
  });

  it('負の値', () => {
    expect(roundToStep(-3.7, 1)).toBe(-4);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(roundToStep.dataLast(0.5)(3.7)).toBe(3.5);
    });
  });
});
