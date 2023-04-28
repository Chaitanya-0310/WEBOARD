import React from 'react';
import Hero from './Hero'
import Companies from './Companies';
import Features from './Features';
import Featuresadd from './Featuresadd';
import Cta from './Cta';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Navbar from './Navbar';
import './index.css';



const Landing = () => {
  return (
    <>
         <Navbar/> 
          <Hero/>
          <Companies/>
          <Features/>
          <Featuresadd/>
          <Cta/>
          {/* <Footer/> */}
          <Subfooter/>        
      
    </>
  )
}

export default Landing
