import React from 'react';
// import './examplestyle.css';
// import './src/mainstyle.css'

const Examples = () => {
  return (
    <div>
    
    <section className="examples-section">
        <div className="container">
            <div className="examples-header flex">
                <h2 className="examples-heading-text">One platform, endless possibilities</h2>
                <a href="#" className="secondary-button">See more examples <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="examples-area flex">
                <a href="#" className="examples-card">
                    <h3 className="card-text">Can user complete a task in my software interface?</h3>
                </a>
                <a className="examples-card" href="#" style="background: linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.8)), url(./assets/asset 34.jpeg); background-size: cover;">
                    <h3 className="card-text">Can users find important pages on my website?</h3>
                </a>
                <a className="examples-card" href="#">
                    <h3 className="card-text">Is my website’s intended audience clear? </h3>
                </a>
                <a className="examples-card" href="#">
                    <h3 className="card-text">Do visitors understand what a page is about?</h3>
                </a>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Examples
