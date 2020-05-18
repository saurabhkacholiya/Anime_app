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
} from "./actions";
import NetworkUtils from "../../utils/NetworkUtils";
const { axiosInstance } = NetworkUtils

export function* fetchSearchData({data}) {
  try {
    const response = yield axiosInstance.get(`/search/anime?q=${data}&limit=16`);
    if(response.status === 200){
      yield put(setSearchTermResult(response.data.results))
    }
  } catch (error) {
    window.alert('something went wrong please try again')
  }
}

export default function* searchScreenSaga() {
  yield takeEvery(GET_SEARCH_TERM_RESULT, fetchSearchData);
}
