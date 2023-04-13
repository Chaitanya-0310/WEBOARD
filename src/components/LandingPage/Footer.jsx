import React from 'react';
// import './footerstyle.css';
// import './src/mainstyle.css'


const Footer = () => {
  return (
    <div>
      
    <footer>
        <div className="container flex footer-container">
        <a href="#" class="company-logo">
                <h1 className ="hellofont">WEBOARD</h1>
            </a>
            <div className="link-column flex">
                <h4>Product</h4>
                <a href="#" className="hover-link">Overview</a>
                <a href="#" className="hover-link">Pricing</a>
                <a href="#" className="hover-link">Usability Hub</a>
                <a href="#" className="hover-link">Customers Page</a>
                <a href="#" className="hover-link">Status Page</a>
            </div>
            <div className="link-column flex">
                <h4>Methodology</h4>
                <a href="#" className="hover-link">Overview</a>
                <a href="#" className="hover-link">Pricing</a>
                <a href="#" className="hover-link">Usability Hub</a>
                <a href="#" className="hover-link">Customers Page</a>
                <a href="#" className="hover-link">Status Page</a>
            </div>
            <div className="link-column flex">
                <h4>Resources</h4>
                <a href="#" className="hover-link">Overview</a>
                <a href="#" className="hover-link">Pricing</a>
                <a href="#" className="hover-link">Usability Hub</a>
                <a href="#" className="hover-link">Customers Page</a>
                <a href="#" className="hover-link">Status Page</a>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer

 