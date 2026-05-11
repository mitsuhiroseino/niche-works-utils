export type DebounceOptions = {
  /**
   * 実行するタイミング
   *
   * - 'end': `☆-★-★`
   * - 'start': `★-★-☆`
   * - 'both': `★-★-★`
   *
   * \* ★: 実行、☆: 未実行
   *
   * @default 'end'
   */
  triggerAt?: 'end' | 'start' | 'both';
};

export interface DebounceResult<ARGS extends unknown[]> {
  (...args: ARGS): void;
  cancel(): void;
  flush(): void;
  isIdle(): boolean;
}
