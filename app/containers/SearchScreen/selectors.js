import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchScreen state domain
 */

const selectSearchScreenDomain = state => state.searchScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchScreen
 */

const makeSelectSearchScreen = () =>
  createSelector(
    selectSearchScreenDomain,
    substate => substate,
  );

export default makeSelectSearchScreen;
export { selectSearchScreenDomain };
