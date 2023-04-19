import React, {StrictMode, useState} from 'react';
import {Switch, Route, Routes} from "react-router-dom";
import Landing from './components/LandingPage/Landing';
import Login from './components/login_signup/Login';
import Register from './components/login_signup/Register';
import Error from './components/LandingPage/Error';
import MindNode from './components/flowchart/node.component';
import Dashboard from './components/DashBoard/Dashboard';
import './components/DND/indexstyle.css'
import Dnd from './components/DND/Dnd'
import MappingNode from './components/MappingFlow/MappingNode';
import Board from './components/WhiteBoard/Board';
import { Toaster } from 'react-hot-toast';


const App = () => {

 return (
    
<>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>



    <Routes>
     <Route exact path = "/" element={<Landing/>}/> 
     <Route exact path = '/login' element={<Login/>}/>
     <Route exact path = '/register' element={<Register/>}/>
     <Route  path = '*' element={<Error/>}/>
     <Route exact path='/dashboard' element={<Dashboard/>}/>
     <Route exact path = '/flowchart' element={<MindNode/>}/>
     <Route exact path="/draganddrop" element={<Dnd/>}/>
     <Route exact path = '/mapping' element={<MappingNode/>}/> 
     <Route path="/whiteboard" element={<Board />}/>
  
   </Routes> 
  
 
</>  
  )
}

export default App
