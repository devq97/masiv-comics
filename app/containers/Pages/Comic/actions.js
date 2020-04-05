import * as types from './types';

/**
 * Fetch latest comic action
 * @param {*} dataInit 
 * @param {*} branch 
 */
export const fetchLatestComicAction = (dataInit, branch) => {
  return ({ branch, type: `${branch}/${types.FETCH_LATEST_COMIC}` });
};

/**
 * Fetch random comic action
 * @param {*} number 
 * @param {*} branch 
 */
export const fetchRandomComicAction = (number, branch) => {
  return ({ branch, type: `${branch}/${types.FETCH_RANDOM_COMIC}`, payload: number });
};

/**
 * update rate action
 * @param {*} rate 
 * @param {*} branch 
 */
export const updateRateAction = (rate, branch) => {
  return ({ branch, type: `${branch}/${types.UPDATE_RATE}`, payload: rate });
};

