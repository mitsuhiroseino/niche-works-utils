import type { ForEachValuesOptions } from '../forEachValues';

export type MaybeAssignOptions = ForEachValuesOptions & {
  skipNull?: boolean;
};
