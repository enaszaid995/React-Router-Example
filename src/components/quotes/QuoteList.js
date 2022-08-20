import { Fragment } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
  
};

const QuoteList = (props) => {
  // const history=useHistory();
  const navigate =useNavigate();
  const location=useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort')=== 'asc';

  const changeSortHandler=()=>{
    navigate(`/allQuouts?sort=`+(isSortingAscending? 'desc' :'asc'));    
  }
  const quouteSorting=sortQuotes(props.quotes,isSortingAscending);
  return (
    <Fragment>
      <button className='btn' onClick={changeSortHandler} style={{margin:'1rem 24rem', textAlign:'center'} }>Sort  {isSortingAscending?'Descending':'Ascending'}</button>
      <ul className={classes.list}>
        {quouteSorting.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
