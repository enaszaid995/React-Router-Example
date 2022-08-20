import { Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuouts from "./pages/AllQuouts";
import NewQuout from "./pages/NewQuout";
import NotFound from "./pages/NotFound";
import QuoutDetail from "./pages/QuoutDetail";

function App() {
  return (
    <Layout>
      <Routes>
            <Route path='/' element={<Navigate to='/allQuouts'/>}/>
              
            
            <Route path='/allQuouts/*' element={<AllQuouts/>}/>
                
            <Route path='/allQuouts/:quoutId' element={<QuoutDetail/>} >
                 <Route path='comments' element={<Comments/>}/>
            </Route>
               
            <Route path='/addQuouts' element={<NewQuout/>}/>
                
            <Route path='*' element={<NotFound/>}/>
              
        </Routes>
    </Layout>
  );
}

export default App;
