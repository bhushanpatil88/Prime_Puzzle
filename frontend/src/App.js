
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import {  useState,createContext} from 'react';
import { ProtectRoutes } from './auth/protectRoutes';
import Login  from './components/Login';
import  Register  from './components/Register';
import Question from './components/Question'
import Error from './components/Error';


export const AuthContext = createContext();
function App() {

  
  return (
     
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            {/* {localStorage.getItem("islogged") && <Route path="/question/:id" element={<Question />}></Route>} */}
            <Route element={ <ProtectRoutes /> }>
              <Route path='/question/:id' element={ <Question/> } />
            </Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes>
      </BrowserRouter> 
      
    
  );
}


export default App;
