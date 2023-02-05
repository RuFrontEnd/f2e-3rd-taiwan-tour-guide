type Params = { select?: string; filter?: string; top?: number; skip?: number };
type ScenicSpots = any[];
type HandleBeforeFetch = null | (() => void);
type HandleThen = null | ((res: any) => void);
type HandleError = null | ((error: any) => void);
type HandleFinal = null | (() => void);

export type {
  Params,
  ScenicSpots,
  HandleBeforeFetch,
  HandleThen,
  HandleError,
  HandleFinal,
};
