
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import {  useState,createContext} from 'react';

import Login  from './components/Login';
import  Register  from './components/Register';
import Question from './components/Question'
import Error from './components/Error';


export const AuthContext = createContext();
function App() {

  
  return (
    // <AuthContext.Provider value={{  }}>   
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            {localStorage.getItem("islogged") && <Route path="/question/:id" element={<Question />}></Route>}

            <Route path="*" element={<Error/>}></Route>
          </Routes>
      </BrowserRouter> 
      // </AuthContext.Provider>
    
  );
}


export default App;
