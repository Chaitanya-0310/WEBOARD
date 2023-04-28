import React from 'react';
import {Link} from "react-router-dom";
import { useState } from 'react';
import Button from '@mui/material/Button';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY>=90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll',changeColor)


  return (
    <div className={color ? 'navbag sticky-nav invert-bg' : 'navbag sticky-nav'}>
       <nav>
        <div className={color ? 'container1 main-nav flex invert-bg' : 'container1 main-nav flex'}>
            <Link to = "/" className="company-logo">
                <h1 className ="hellofont">WEBOARD</h1>
            </Link>
            <div className="nav-links" id="nav-links">
                <ul class="flex">
                    <li><Link to = '/' className="hvr">Products</Link></li>
                    <li><Link exact to = "/" className="hvr">Customer</Link></li>
                    <li><Link exact to = "/" className="hvr">Contact</Link></li>
                    <li><Link exact to="/login"><Button variant="outlined" style={{width:120,height:50, color: '#58549E', borderColor: '#58549E' }} className="border-[#58549E]" >Login</Button></Link></li>
                    <li><Link exact to="/register"><Button variant="constrained" className="hover-link primary-button">Register</Button></Link></li>
                </ul>
            </div>
            <a href="#" class="nav-toggle hover-link" id="nav-toggle">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
