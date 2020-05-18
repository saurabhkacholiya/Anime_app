export const DEFAULT_ACTION = 'app/SearchScreen/DEFAULT_ACTION';
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const GET_SEARCH_TERM_RESULT = 'app/SearchScreen/GET_SEARCH_TERM_RESULT'
export function getSearchTermResult(data){
  return {
    type: GET_SEARCH_TERM_RESULT,
    data
  }
}

export const SET_SEARCH_TERM_RESULT = 'app/SearchScreen/SET_SEARCH_TERM_RESULT'
export function setSearchTermResult(data){
  return {
    type: SET_SEARCH_TERM_RESULT,
    data
  }
}
