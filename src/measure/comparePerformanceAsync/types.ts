import type {
  MeasurementAgenda,
  MeasurementResult,
  RequiredTimeResult,
} from '../comparePerformance';

/**
 * 測定の議題
 */
export type MeasurementAsyncAgenda<
  A extends unknown[] = unknown[],
  R = unknown,
> = MeasurementAgenda<A, Promise<R>>;

/**
 * 計測された処理時間
 */
export type RequiredTimeAsyncResult = RequiredTimeResult;

/**
 * 測定結果
 */
export type MeasurementAsyncResult<
  A extends unknown[] = unknown[],
  R = unknown,
> = MeasurementResult<A, R>;
