import { fromJS } from 'immutable';

import { 
  SET_SEARCH_TERM_RESULT,
  SET_SEARCH_TERM_TEXT,
  SET_CURRENT_PAGE_NO,

} from './actions';

export const initialState = fromJS({
  searchTermResult: [],
  pageNo: 1,
  searchTerm : '',
})

export default function searchScreenReducer(state = initialState, action) {
  const immutableData = action.data
  switch (action.type) {
    case SET_SEARCH_TERM_RESULT:
      return state.set('searchTermResult', immutableData)
    case SET_SEARCH_TERM_TEXT:
      return state.set('searchTerm',immutableData)
    case SET_CURRENT_PAGE_NO:
      return state.set('pageNo', state.get('pageNo') + 1)
    default:
      return state;
  }
}
