import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import * as React from 'react';
import { Container, Content} from 'rsuite';
import { FiPlus } from "react-icons/fi";
import {Link} from 'react-router-dom';




const CardPlate = (props) =>{
  return (
  <>
  <container className = "hover:text-[#3410d4] cursor-pointer">
    
    <div >
      <img className = "cardimage " src={props.image} alt="Template" title="Template" />
    </div>
    
    <div className="ml-1">
      <p className = "flex align-baseline"> <div className = "mt-1 mr-2"> <FiPlus/> </div> { props.name } </p> 
    </div>
</container>    

  </>
  );
};



const ContentContainer = ({updateUser}) => {
  return (


    <div className='content-container'>
      <TopNavigation /> 

     <Container>
      <Content className = "dash-container"> 
      <header>
        <h3 className ="text-3xl mt-1 mb-5 font-medium text-blue-900 flex	">Create a board </h3>
      </header>
 
  <Container className = "template-container"> 
      <header>
        <span className ="text-sm ml-5 font-medium text-gray-600	">Recommended Templates</span>
        <span className ="text-sm ml-5  font-medium text-blue-700 float-right mr-5 cursor-pointer hover:text-blue-400">Show all </span>
      </header>
 
        <div className= 'card-container'>  
          <Link exact to = "/flowchart" ><CardPlate name="Flowchart" image={require("./assets/Flowchart.png")}/> </Link>
          <Link exact to = "/mapping"><CardPlate name="MindMap" image={require("./assets/mind_map.png")}/></Link>
          <Link exact to = "/draganddrop"><CardPlate name="DragNdrop " image={require("./assets/KanbanFramework.png")}/></Link>
          <Link to ="/whiteboard" ><CardPlate name="WhiteBoard" image={require("./assets/Quick_Retrospective.png")}/></Link> 
          <CardPlate name="Customer Timeline" image={require("./assets/CustomerJourneyMapTimeline.png")}/> 
        </div>
     </Container>    
     </Content>
      
     </Container>
    

    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
