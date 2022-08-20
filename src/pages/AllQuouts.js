import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const AllQuouts=()=>{
    const {sendRequest ,status ,error ,data:LoadedQuote}=useHttp(getAllQuotes,true);

    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    
  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!LoadedQuote || LoadedQuote.length === 0)) {
    return <NoQuotesFound />;
  }
    return <QuoteList quotes={LoadedQuote}/>
}
export default AllQuouts;