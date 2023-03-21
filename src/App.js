import React from 'react';
import './index.css';
import {Switch, Route, Routes} from "react-router-dom";
import Landing from './Landing';
import Login from './login_signup/Login.jsx';
import Register from './login_signup/Register.jsx';
import Error from './Error'

const App = () => {
  return (
    
   <Routes>
     <Route exact path = "/" element={<Landing/>}/>
     <Route exat path = '/login' element={<Login/>}/>
     <Route exat path = '/register' element={<Register/>}/>
     <Route path = '*' element={<Error/>}/>
   </Routes>
   
  )
}

export default App
