import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSearchScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SearchScreen() {
  useInjectReducer({ key: 'searchScreen', reducer });
  useInjectSaga({ key: 'searchScreen', saga });

  return (
    <div>
      <span>Hello world</span>
    </div>
  )
}

SearchScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchScreen: makeSelectSearchScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchScreen);
