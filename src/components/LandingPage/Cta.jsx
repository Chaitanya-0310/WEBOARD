import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Cta = () => {
  return (
    <div>
    <section className="cta-section">
        <div className="container flex cta-section-container">
            <h2>Start testing today</h2>
            <p>Take the guesswork out of design decisions</p>
            <Link to = "/login"><Button variant="contained" className='primary-button'>Get Started</Button>
            </Link>
        </div>
    </section>
      
    </div>
  )
}

export default Cta
