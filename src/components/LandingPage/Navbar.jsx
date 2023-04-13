import React from 'react';
import {Link} from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbag">
       <nav >
        <div class="container1 main-nav flex">
            <a href=" " class="company-logo">
                <h1 className ="hellofont">WEBOARD</h1>
            </a>
            <div class="nav-links" id="nav-links">
                <ul class="flex">
                    <li><Link exact to = "/" className="hover-link">Products</Link></li>
                    <li><Link exact to = "/" className="hover-link">Customer</Link></li>
                    <li><Link exact to = "/" className="hover-link">Pricing</Link></li>
                    <li><Link exact to = "/" className="hover-link">Resources</Link></li>
                    <li><Link exact to = "/login" className="hover-link secondary-button">Login</Link></li>
                    <li><Link exact to = "/register" className="hover-link  primary-button">Register</Link></li>
                
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
