import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import throttle from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('基本動作', () => {
    it('最初の呼び出しで即時実行される（triggerAt: "both" デフォルト）', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a');
      expect(fn).toHaveBeenCalledOnce();
      expect(fn).toHaveBeenCalledWith('a');
    });

    it('wait未満の間隔で連続呼び出しされてもwait毎に1回だけ実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a'); // 即時実行
      vi.advanceTimersByTime(50);
      throttledFn('b'); // wait中なので保留
      vi.advanceTimersByTime(50);
      // wait経過で 'b' が実行される

      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(1, 'a');
      expect(fn).toHaveBeenNthCalledWith(2, 'b');
    });

    it('wait以上の間隔が空いた場合はそれぞれ即時実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a');
      vi.advanceTimersByTime(100);

      throttledFn('b');
      vi.advanceTimersByTime(100);

      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(1, 'a');
      expect(fn).toHaveBeenNthCalledWith(2, 'b');
    });

    it('wait中に複数回呼ばれた場合、最後の引数で実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a'); // 即時実行
      vi.advanceTimersByTime(30);
      throttledFn('b'); // 保留
      vi.advanceTimersByTime(30);
      throttledFn('c'); // 保留（'b'を上書き）
      vi.advanceTimersByTime(40);
      // wait経過で 'c' が実行される

      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(1, 'a');
      expect(fn).toHaveBeenNthCalledWith(2, 'c');
    });
  });

  describe('triggerAt オプション', () => {
    it('triggerAt: "both"（デフォルト）は最初と最後の両方で実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100, { triggerAt: 'both' });

      throttledFn('a');
      expect(fn).toHaveBeenCalledOnce(); // 即時実行

      vi.advanceTimersByTime(50);
      throttledFn('b');
      vi.advanceTimersByTime(50);
      expect(fn).toHaveBeenCalledTimes(2); // wait後実行
    });

    it('triggerAt: "start" は最初の呼び出しのみ即時実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100, { triggerAt: 'start' });

      throttledFn('a');
      expect(fn).toHaveBeenCalledOnce();

      vi.advanceTimersByTime(50);
      throttledFn('b');
      vi.advanceTimersByTime(50);
      // wait後は実行されない
      expect(fn).toHaveBeenCalledOnce();
    });

    it('triggerAt: "end" はwait後にのみ実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100, { triggerAt: 'end' });

      throttledFn('a');
      expect(fn).not.toHaveBeenCalled(); // 即時実行されない

      vi.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledOnce();
      expect(fn).toHaveBeenCalledWith('a');
    });
  });

  describe('cancel', () => {
    it('cancel後は保留中の実行がキャンセルされる', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100, { triggerAt: 'end' });

      throttledFn('a');
      throttledFn.cancel();
      vi.advanceTimersByTime(100);

      expect(fn).not.toHaveBeenCalled();
    });

    it('cancel後も新たな呼び出しは正常に動作する', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100, { triggerAt: 'end' });

      throttledFn('a');
      throttledFn.cancel();
      vi.advanceTimersByTime(100);

      throttledFn('b');
      vi.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledOnce();
      expect(fn).toHaveBeenCalledWith('b');
    });
  });

  describe('flush', () => {
    it('flush後は保留中の関数が即時実行される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100, { triggerAt: 'end' });

      throttledFn('a');
      expect(fn).not.toHaveBeenCalled();

      throttledFn.flush();
      expect(fn).toHaveBeenCalledOnce();
      expect(fn).toHaveBeenCalledWith('a');
    });

    it('保留中の呼び出しがない場合、flushは何もしない', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn.flush();
      expect(fn).not.toHaveBeenCalled();
    });
  });

  describe('isIdle', () => {
    it('初期状態はtrue', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      expect(throttledFn.isIdle()).toBe(true);
    });

    it('呼び出し中はfalse', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a');
      expect(throttledFn.isIdle()).toBe(false);
    });

    it('wait後はtrue', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a');
      vi.advanceTimersByTime(100);
      expect(throttledFn.isIdle()).toBe(true);
    });
  });

  describe('複数引数', () => {
    it('複数の引数が正しく渡される', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('a', 'b', 'c');
      expect(fn).toHaveBeenCalledWith('a', 'b', 'c');
    });
  });
});
