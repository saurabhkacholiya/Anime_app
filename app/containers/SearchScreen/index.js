import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import styled from "styled-components";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { 
  getSearchTermResult,
  fetchDataOnScrollEnd,
  setSearchCurrentPageNo,
  setSearchTermText
} from "./actions";
import { selectSearchTermResult } from './selectors'
import SearchImage from "../../images/search.png";
import { defaultData } from "./constants";

const SearchBar = styled.input`
    height: 40px;
    width: 350px;
    padding: 10px;
    margin: 10px;
    border: none;
    outline-width: 0;
    font-size: 18px;
    font-weight: bold;
    padding-right: 50px;
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
  background: #fff;
  justify-content: space-around;
  position: relative;
  .imgLogo{
    position: absolute;
    top: 10px;
    right: 20px;
    height: 35px;
  }
`

const ImageMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self:center;
  flex-wrap: wrap;
  margin: 20px;
`

const Card = styled.div`
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2);
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 20px 20px;
  margin: 10px;
  .imgCls{
    display: flex;
    flex: 0.8;
    height: 80%;
    min-width: 330px;
    border-radius: 20px 20px 0 0;
  }
  .title{
    display:flex;
    flex:0.2;
    justify-content: center;
    align-items:center;
    text-align:center;
    padding:10px;
  }
`


export function SearchScreen({
  getSearchTermResult,
  searchTerm,
  fetchDataOnScrollEnd,
  setSearchCurrentPageNo,
  setSearchTermText,
}) {
  useInjectReducer({ key: 'searchScreen', reducer });
  useInjectSaga({ key: 'searchScreen', saga });

  console.log('searchTerm ', searchTerm)

  useBottomScrollListener(() => {
    setSearchCurrentPageNo()
    fetchDataOnScrollEnd()
  })

  const debounce = (callback,delay) => {
    let timer 
    return (data) => {
      clearInterval(timer)
      timer = setTimeout(() => {
        setSearchTermText(data)
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
            placeholder="search for an anime, e.g Naruto"
            type="text"
            onChange={(e) => onChange(e.target.value)}
          />
          <img className="imgLogo" src={SearchImage} alt="search image logo"/>
        </SearchDiv>
      </SearchBarWrapper>
      <ImageMainDiv>
        {
          searchTerm && 
            searchTerm.map((item) => (
                <Card>
                  <img className="imgCls" src={item.image_url}/>
                  <span className="title">{item.title}</span>
                </Card>
              ))
        }
      </ImageMainDiv>
      
    </>
  )
}


const mapStateToProps = createStructuredSelector({
  searchTerm : selectSearchTermResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSearchTermResult: data => dispatch(getSearchTermResult(data)),
    fetchDataOnScrollEnd: () => dispatch(fetchDataOnScrollEnd()),
    setSearchCurrentPageNo: () => dispatch(setSearchCurrentPageNo()),
    setSearchTermText: data => dispatch(setSearchTermText(data)),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchScreen);
