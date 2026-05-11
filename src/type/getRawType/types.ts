import type { ToStringResult } from '@niche-works/constants';

/**
 * 主要な組み込みオブジェクトの型ラベルのUnion
 */
export type GetRawTypeReturn = ToStringResult | `[object ${string}]`;
