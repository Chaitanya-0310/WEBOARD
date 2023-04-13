import React, {StrictMode, useState} from 'react';
import {Switch, Route, Routes} from "react-router-dom";
import Landing from './components/LandingPage/Landing';
import Login from './components/login_signup/Login';
import Register from './components/login_signup/Register';
import Error from './components/LandingPage/Error';
import MindNode from './components/flowchart/node.component';
import Dashboard from './components/DashBoard/Dashboard';
import MindApp from './components/MindMap/MindApp'
import './components/MindMap/indexstyle.css'



const App = () => {

 const [ user, setLoginUser] = useState({})

 return (
    
    <Routes>
   
      {/* <Route exact path="/">
            {
              user && user._id ? <Landing setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
           }
       </Route> 
    
     <Route exact path="/login">
            <Login setLoginUser={setLoginUser}/>
     </Route> */}

     <Route exact path = "/" element={<Landing/>}/> 
     <Route exact path = '/login' element={<Login/>}/>
     <Route exact path = '/register' element={<Register/>}/>
     <Route  path = '*' element={<Error/>}/>
     <Route exact path = '/flowchart' element={<MindNode/>}/>
    
     <Route exact path='/dashboard' element={<Dashboard/>}/>
     <Route exact path="/draganddrop" element={<MindApp/>}/>
  
   </Routes> 
  
 
  
  )
}

export default App
