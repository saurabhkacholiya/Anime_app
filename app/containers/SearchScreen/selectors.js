import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchScreenDomain = state => state.searchScreen || initialState;

const selectSearchTermResult = () =>
  createSelector(
    selectSearchScreenDomain,
    subState => subState.get('searchTermResult'),
  );

  const selectSearchPageNo = () =>
  createSelector(
    selectSearchScreenDomain,
    subState => subState.get('pageNo'),
  );

  const selectSearchTermText = () =>
  createSelector(
    selectSearchScreenDomain,
    subState => subState.get('searchTerm'),
  );


export { 
  selectSearchScreenDomain,
  selectSearchTermResult,
  selectSearchPageNo,
  selectSearchTermText,
};
