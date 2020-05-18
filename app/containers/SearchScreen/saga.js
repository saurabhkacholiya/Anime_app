import { 
  take, 
  call, 
  put, 
  select,
  takeEvery,
} from 'redux-saga/effects';
import { 
  GET_SEARCH_TERM_RESULT, 
  setSearchTermResult,
  FETCH_ON_SCROLL_END,
} from "./actions";
import { 
  selectSearchPageNo,
  selectSearchTermText,
  selectSearchTermResult,
} from "./selectors";
import NetworkUtils from "../../utils/NetworkUtils";
const { axiosInstance } = NetworkUtils

export function* fetchSearchData({data}) {
  try {
    const response = yield axiosInstance.get(`/search/anime?q=${data}&limit=16&page=1`);
    if(response.status === 200){
      yield put(setSearchTermResult(response.data.results))
    }
  } catch (error) {
    window.alert('something went wrong please try again')
  }
}

export function* fetchDataOnScrollEndSaga() {
  try {

    const searchTermText = yield select(selectSearchTermText())
    const pageNo = yield select(selectSearchPageNo())
    const previousResult = yield select(selectSearchTermResult())

    const response = yield axiosInstance.get(`/search/anime?q=${searchTermText}&limit=16&page=${pageNo}`);

    if(response.status === 200){
      yield put(setSearchTermResult([...previousResult,...response.data.results]))
    }
  } catch (error) {
    window.alert('something went wrong please try again')
  }
}

export default function* searchScreenSaga() {
  yield takeEvery(GET_SEARCH_TERM_RESULT, fetchSearchData);
  yield takeEvery(FETCH_ON_SCROLL_END, fetchDataOnScrollEndSaga);
}
