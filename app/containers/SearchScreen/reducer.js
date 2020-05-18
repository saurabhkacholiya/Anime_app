import { fromJS } from 'immutable';

import { 
  SET_SEARCH_TERM_RESULT,
} from './actions';

export const initialState = fromJS({
  searchTermResult: []
})

export default function searchScreenReducer(state = initialState, action) {
  const immutableData = fromJS(action.data);
  switch (action.type) {
    case SET_SEARCH_TERM_RESULT:
      return state.set('searchTermResult', immutableData)
    default:
      return state;
  }
}
