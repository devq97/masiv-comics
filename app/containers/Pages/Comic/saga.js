import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { parseList, parseItem } from 'dan-utils/actionResponse';
import * as types from './types';

const branch = 'comic';

/**
 * Fetch latest comic saga
 */
function* fetchLatestComicAsync() {
  try {
    const response = yield axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`);
    const data = yield parseList(response);
    yield put(({ branch, type: `${branch}/${types.FETCH_LATEST_COMIC_SUCCESS}`, payload: data }));
  } catch (error) {
    console.log(error);
    yield put(({ branch, type: `${branch}/${types.FETCH_COMIC_FAIL}`, payload: error }));
  }
}

/**
 * Fetch random comic saga
 * @param {*} param0 
 */
function* fetchRandomComicAsync({ payload }) {
  try {
    const response = yield axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/${payload}/info.0.json`);
    const data = yield parseList(response);
    yield put(({ branch, type: `${branch}/${types.FETCH_RANDOM_COMIC_SUCCESS}`, payload: data }));
  } catch (error) {
    console.log(error);
    yield put(({ branch, type: `${branch}/${types.FETCH_COMIC_FAIL}`, payload: error }));
  }
}

/**
 * Watchers
 */
export function* rootSaga() {
  yield all([
    yield takeLatest(`${branch}/${types.FETCH_LATEST_COMIC}`, fetchLatestComicAsync),
    yield takeLatest(`${branch}/${types.FETCH_RANDOM_COMIC}`, fetchRandomComicAsync)
  ]);
}
