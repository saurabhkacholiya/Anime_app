import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import styled from "styled-components";
import { getSearchTermResult } from "./actions";
import { selectSearchTermResult } from './selectors'

const SearchBar = styled.input`
  height: 40px;
  width: 400px;
  padding: 10px;
  margin: 10px;
  border : none;
  outline-width: 0;
`

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0%;
  margin: 10px;
  border-collapse: collapse;

`

const SearchDiv = styled.div`
  border-radius: 38px;
  display: flex;
  border: 1px solid black;
  border-collapse: collapse;
`

export function SearchScreen({
  getSearchTermResult,
  searchTerm,
}) {
  useInjectReducer({ key: 'searchScreen', reducer });
  useInjectSaga({ key: 'searchScreen', saga });

  console.log('searchTerm ', searchTerm)

  const debounce = (callback,delay) => {
    let timer 
    return (data) => {
      clearInterval(timer)
      timer = setTimeout(() => {
        callback(data)
      }, delay);
    }
  }

  const onChange = debounce(getSearchTermResult,300)

  return (
    <>
      <SearchBarWrapper>
        <SearchDiv>
          <SearchBar 
            type="text"
            onChange={(e) => onChange(e.target.value)}
          />
        </SearchDiv>
      </SearchBarWrapper>
      <div>
        {
          searchTerm &&
            searchTerm.map((item) => (
              <div>
                <span>{item.image_url}</span>
              </div>
            ))
        }
      </div>
    </>
  )
}


const mapStateToProps = createStructuredSelector({
  searchTerm : selectSearchTermResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSearchTermResult: data => dispatch(getSearchTermResult(data))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchScreen);
