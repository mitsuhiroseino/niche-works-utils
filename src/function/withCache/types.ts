/**
 * オプション
 */
export type WithCacheOptions<T extends unknown[], R> = {
  /**
   * キャッシュの有効期限（ミリ秒）
   *
   * 省略した場合はキャッシュが無期限に保持される。
   *
   * @example
   * // 60秒間キャッシュする
   * withCache(fetchData, { ttl: 60_000 });
   */
  ttl?: number;

  /**
   * キャッシュキーの生成関数
   *
   * 省略した場合は `JSON.stringify(args)` を使用する。
   * 引数にシリアライズできない値が含まれる場合や、
   * キーの生成ロジックをカスタマイズしたい場合に指定する。
   *
   * @param args ラップされた関数の引数
   */
  cacheKey?: (...args: T) => string;

  /**
   * キャッシュの保存先となるストア
   *
   * `get` / `set` / `delete` を持つオブジェクトであれば何でも使用できる。
   * 省略した場合は内部で `Map` を使用する。
   * テスト時のモックや、`localStorage` などの外部ストアへの差し替えに使用する。
   */
  store?: CacheStore<R>;
};

/**
 * キャッシュストアーのインターフェイス
 */
export interface CacheStore<R> {
  /**
   * エントリーの取得
   * @param key
   */
  get(key: string): CacheEntry<R> | undefined;

  /**
   * エントリーの設定
   * @param key キャッシュキー
   * @param entry キャッシュするエントリー
   */
  set(key: string, entry: CacheEntry<R>): void;

  /**
   * エントリーの削除
   * @param key
   */
  delete(key: string): void;
}

/**
 * キャッシュストアーが受け取るエントリー
 */
export type CacheEntry<R> = {
  /**
   * キャッシュされた値
   */
  value: R;

  /**
   * キャッシュの期限
   */
  expiresAt: number | null;
};
