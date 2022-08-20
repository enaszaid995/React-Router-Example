import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuout=()=>{
    // const history=useHistory();
    const navigte =useNavigate();

    const {sendRequest,status }=useHttp(addQuote);
    
  useEffect(() => {
    if (status === 'completed') {
      navigte('/allQuouts');
    }},[status,navigte]);
 
      const AddQuoteHandler=(quote)=>{
        sendRequest(quote);
        // navigte('/allQuouts');
    }
    return <QuoteForm isLoading={status === 'pending'} onAddQuote={AddQuoteHandler}/>
}
export default NewQuout;