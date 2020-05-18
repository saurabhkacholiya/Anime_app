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

export const SET_SEARCH_TERM_TEXT = 'app/SearchScreen/SET_SEARCH_TERM_TEXT'
export function setSearchTermText(data){
  return {
    type: SET_SEARCH_TERM_TEXT,
    data
  }
}

export const SET_CURRENT_PAGE_NO = 'app/SearchScreen/SET_CURRENT_PAGE_NO'
export function setSearchCurrentPageNo(data){
  return {
    type: SET_CURRENT_PAGE_NO,
  }
}

export const FETCH_ON_SCROLL_END = 'app/SearchScreen/FETCH_ON_SCROLL_END'
export function fetchDataOnScrollEnd(){
  return {
    type: FETCH_ON_SCROLL_END
  }
}