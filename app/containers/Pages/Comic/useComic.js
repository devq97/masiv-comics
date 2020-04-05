import { useDispatch, useSelector } from "react-redux";
import {
  fetchLatestComicAction,
  fetchRandomComicAction,
  updateRateAction
} from "./actions";

const branchState = 'comic';

function useComic() {
  const dispatch = useDispatch();

  return {

    comic: useSelector(state => state.getIn([branchState, 'comic'])),

    fetchLatestComic: (dataInit, branch) => dispatch(fetchLatestComicAction(dataInit, branch)),
    fetchRandomComic: (number, branch) => dispatch(fetchRandomComicAction(number, branch)),
    updateRate: (rate, branch) => dispatch(updateRateAction(rate, branch))

  };
}

export default useComic;
