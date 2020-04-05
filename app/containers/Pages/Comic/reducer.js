import { fromJS } from "immutable";
import * as types from './types';

/**
 * Initial state
 */
export const initialState = {
  comic: {
    items: fromJS({}),
    loading: false,
    error: false,
    rate: 2,
    max: 0
  }
};

const initialImmutableState = fromJS(initialState);

/**
 * Switch reducer
 * @param {*} state 
 * @param {*} action 
 */
export default function reducer(state = initialImmutableState, action = {}) {
  const { branch } = action;
  switch (action.type) {
    case `${branch}/${types.FETCH_LATEST_COMIC}`:
    case `${branch}/${types.FETCH_RANDOM_COMIC}`:
      return state.withMutations((mutableState) => {
        mutableState.setIn(['comic', 'error'], false)
          .setIn(['comic', 'loading'], true);
      });
    case `${branch}/${types.FETCH_LATEST_COMIC_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.payload);
        mutableState.setIn(['comic', 'items'], items)
          .setIn(['comic', 'max'], items.get('num'))
          .setIn(['comic', 'error'], false)
          .setIn(['comic', 'loading'], false);
      });
    case `${branch}/${types.FETCH_RANDOM_COMIC_SUCCESS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.payload);
        mutableState.setIn(['comic', 'items'], items)
          .setIn(['comic', 'error'], false)
          .setIn(['comic', 'loading'], false);
      });
    case `${branch}/${types.FETCH_COMIC_FAIL}`:
      return state.withMutations((mutableState) => {
        const error = fromJS(action.payload);
        mutableState.setIn(['comic', 'error'], error)
          .setIn(['comic', 'loading'], false);
      });
    case `${branch}/${types.UPDATE_RATE}`:
      return state.withMutations((mutableState) => {
        const rate = fromJS(action.payload);
        mutableState.setIn(['comic', 'rate'], rate)
      });
    default:
      return state;
  }
}
