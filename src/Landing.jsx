import React from 'react';
import Hero from './Hero'
import Companies from './Companies';
import Features from './Features';
import Featuresadd from './Featuresadd';
import Examples from './Examples';
import Cta from './Cta';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Navbar from './Navbar'


const Landing = () => {
  return (
    <>
         <Navbar/> 
          <Hero/>
          <Companies/>
          <Features/>
          <Featuresadd/>
          <Cta/>
          <Footer/>
          <Subfooter/>
          
          
      
    </>
  )
}

export default Landing
