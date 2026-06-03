import overrideInstance from './overrideInstance';

describe('overrideInstance', () => {
  it('プロパティをオーバーライドできる', () => {
    const instance = { greet: () => 'hello', name: 'original' };
    const proxy = overrideInstance(instance, {
      greet: () => () => 'overridden',
    });
    expect(proxy.greet()).toBe('overridden');
  });

  it('オーバーライドされていないプロパティは元のinstanceの値を返す', () => {
    const instance = { a: 1, b: 2 };
    const proxy = overrideInstance(instance, {
      a: () => 99,
    });
    expect(proxy.b).toBe(2);
  });

  it('overridesが空でも元のinstanceと同様に動作する', () => {
    const instance = { x: 42 };
    const proxy = overrideInstance(instance);
    expect(proxy.x).toBe(42);
  });
});
