import React from 'react';
// import './featuresaddstyle.css';
// import './src/mainstyle.css'


const Featuresadd = () => {
  return (
    <>
    
    <section className="big-feature-section">
        <div className="container flex big-feature-container">
            <div className="feature-img">
                <img src={require("./assets/asset 18.png")} alt=""/>
            </div>
            <div className="feature-desc flex">
                <h2>Effortless validation for</h2>
                <h2>Design professionals</h2>
                <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
            </div>
        </div>
    </section>
    
    <section className="big-feature-section">
        <div className="container flex big-feature-container" id="second-big-feature">
            <div className="feature-img">
                <img src={require("./assets/hybridwork (1).png")} alt=""/>
            </div>
            <div className="feature-desc flex">
                 <h2>Hands-On with</h2>
                <h2>Various  Templates</h2>
                <p>Buid, draw, design according to your need along with your team members collaboratively.</p>
            </div>
        </div>
    </section>

    <section className="big-feature-section">
        <div className="container flex big-feature-container">
            <div className="feature-img">
                <img src={require("./assets/asset 38.png")} alt=""/>
            </div>
            <div className="feature-desc flex">
                <h2>Work together,</h2>
                <h2>wherever you work</h2>
                <p>In the office, remote, or a mix of the two, with WeBoard, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
            
            </div>
        </div>
    </section>

      
    </>
  )
}

export default Featuresadd
