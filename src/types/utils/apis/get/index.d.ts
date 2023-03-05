type Params = {
  $select?: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
} | null;
type HandleBeforeFetch = null | (() => void);
type HandleThen = null | ((res: any) => void) | undefined;
type HandleError = null | ((error: any) => void) | undefined;
type HandleFinal = null | (() => void) | undefined;

export type { Params, HandleBeforeFetch, HandleThen, HandleError, HandleFinal };
