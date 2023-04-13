import React from 'react';
// import './featurestyle.css';
// import './src/mainstyle.css'


const Features = () => {
  return (
    <div>
    
<div className="features-section">
<div className="container">
    <div classNam="features-header">
        <h2 className="features-heading-text">Explore Various available templates</h2>
        <a href="#" className="secondary-button">See all templates <i className="fa-solid fa-right-long"></i></a>
    </div>
    <div className="features-area flex">
        <div className="features-card flex">
            <img src={require("../assets/asset 11.svg")} alt=""/>
            <h3>WhiteBoard</h3>
            <p>Enjoy learning with your lecturer and solve problem collaboratively with the interactive feature.</p>
            <a href="#" className="secondary-button">Learn More <i className="fa-solid fa-right-long"></i></a>
        </div>
        <div className="features-card flex">
            <img src={require("../assets/asset 13.svg")} alt=""/>
            <h3>Flowchart</h3>
            <p>Prepare flowcharts with the help of different available shapes using drag and drop feature.</p>
            <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
        </div>
        <div className="features-card flex">
            <img src={require("../assets/asset 14.svg")} alt=""/>
            <h3>Strategic Planning</h3>
            <p>Define goals and initiatives, visualize priorities and outcomes, and watch those plans pay off in a big way.</p>
            <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
        </div>
        <div className="features-card flex">
            <img src={require("../assets/asset 15.svg")} alt=""/>
            <h3>Mapping</h3>
            <p>Plan projects, map out information architecture, or create org charts</p>
            <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
        </div>
        <div className="features-card flex">
            <img src={require("../assets/asset 16.svg")} alt=""/>
            <h3>Diagramming</h3>
            <p>Flowcharts, Swimlanes, Strategic Planning</p>
            <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
        </div>
        <div className="features-card flex">
            <img src={require("../assets/asset 17.svg")} alt=""/>
            <h3>Scrum Events</h3>
            <p>Put ideas into action, and visualize projects, all in one place.</p>
            <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
        </div>
    </div>
</div>
</div>

      
    </div>
  )
}

export default Features
