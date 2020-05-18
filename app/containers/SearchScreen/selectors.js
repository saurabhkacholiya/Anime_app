import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchScreenDomain = state => state.searchScreen || initialState;

const selectSearchTermResult = () =>
  createSelector(
    selectSearchScreenDomain,
    subState => subState.get('searchTermResult'),
  );

export { 
  selectSearchScreenDomain,
  selectSearchTermResult,
};
