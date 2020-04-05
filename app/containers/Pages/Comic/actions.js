import * as types from './types';

export const fetchLatestComicAction = (dataInit, branch) => {
  return ({ branch, type: `${branch}/${types.FETCH_LATEST_COMIC}` });
};

export const fetchRandomComicAction = (number, branch) => {
  return ({ branch, type: `${branch}/${types.FETCH_RANDOM_COMIC}`, payload: number });
};

export const updateRateAction = (rate, branch) => {
  return ({ branch, type: `${branch}/${types.UPDATE_RATE}`, payload: rate });
};

