import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Subfooter from '../Subfooter';
import {Link} from "react-router-dom";
import Register from './Register';

function App() {
  return (
    
    <>
    
     <Navbar/>
  

     
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='9' md='6' className=''>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='4' className=''>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="text-center">
            <p>Not a member? <Link exact to ="/register">Register</Link></p></div>

          <MDBBtn className="mb-4 w-100" size="lg">LOGIN</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
         
           
         <Footer/>
         <Subfooter/>

   </> 
  );
}

export default App;