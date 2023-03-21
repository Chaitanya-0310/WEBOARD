import React from 'react';
// import './Hero.css';
// import './src/mainstyle.css'

const Hero = () => {
  return (
    <header>
        <div class="container header-section flex">
            <div class="header-left">
                <h1>Design Confidently</h1>
                <p>WeBoard is your team's visual platform to connect, collab & create-- together.</p>
                <a href="#" class="primary-button get-started-btn">Get Started</a>
            </div>
            <div class="header-right">
                <img src={require("./assets/headerimage-without-text.png")} alt="hero image"/>
               
            </div>
        </div>
    </header>
    
  )
}

export default Hero
