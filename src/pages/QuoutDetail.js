import { Fragment ,useEffect} from "react";
import { Route, useParams , Link, Outlet } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoutDetail=()=>{
    

    
     const params=useParams();
     const { quoutId } = params;
    
     const { sendRequest, status, data: loadedQuote, error } = useHttp(
        getSingleQuote,
        true
      );
    
  useEffect(() => {
    sendRequest(quoutId);
  }, [sendRequest, quoutId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote || loadedQuote.length === 0) {
    return <p>No quote found!</p>
  }
  console.log(loadedQuote.text);

    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.auther}/>
        
            <div className="centered">
                <Link className="btn--flat" to={'comments'}> Load Comments</Link>
            </div>
        
        {/* <Route path='comments' element={<Comments/>}/> */}
        <Outlet/>
            
    </Fragment>
}
export default QuoutDetail;