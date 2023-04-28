import React from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <header>
        <div class="container header-section flex">
            <div class="header-left">
                <h1>Design Confidently</h1>
                <p>WeBoard is your team's visual platform to connect, collab & create-- together.</p>
                <Link to = "/login"><Button variant="contained" style={{width:130,height:50, backgroundColor: "#58549E"}} clasName="primary-button get-started-btn">Get started</Button>
            
                </Link> 
               </div>
            <div class="header-right">
                <img src={require("../assets/headerimage-without-text.png")} alt="hero image"/>
               
            </div>
        </div>
    </header>
    
  )
}

export default Hero
