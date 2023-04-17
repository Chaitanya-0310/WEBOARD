import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Navbar from '../LandingPage/Navbar';
import Divider from '@mui/material/Divider';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'




const Register =()=> {

  const navigate = useNavigate()


  const [ user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    reEnterPassword: ""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const register = () => {
  const { name, email, password, reEnterPassword } = user
  if( name && email && password && (password === reEnterPassword)){
      axios.post("http://localhost:9002/register", user)
      .then( res => {
          alert(res.data.message)
          // toast.success('User Registered Successfully')
          navigate("/login")
      })
    } else if (name == "") {
      toast.error("Please Enter Your Name")
    } else if (email == "") {
      toast.error("Please Enter Your Email")
    } else if (password == "") {
      toast.error("Please Enter Your Password")
    } else if (password != reEnterPassword) {
      toast.error("Your password does not match with your Re-entered password")
    } else {
      toast.error("invalid input")
    }
  
}
 
return (

    <>
    <Navbar/>
    
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Take ideas from <br />
            <span className="text-[#58549E]">better to best </span>
          </h1>

          <p className='px-3' style={{color: '#58549E'}}>
          Weboard is your team's visual platform to connect, collaborate, and create — together.
          </p>

        </MDBCol>

        <MDBCol md='6'>
          {console.log("User", user)}
          <MDBCard className='my-4' style={{ backgroundColor: '#e2eafc'}}>
            <MDBCardBody className='p-4'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'  name="name" value={user.name} onChange={ handleChange } style={{width: 300, height: 50}}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Enter Email' id='form2' type='email' name="email" value={user.email} onChange={ handleChange } style={{width: 300, height: 50}}/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password' name="password" value={user.password} onChange={ handleChange } style={{width: 300, height: 50}}/>


              <MDBInput wrapperClass='mb-4' label='ReEnter Password' id='form4' type='password' name="reEnterPassword" value={user.reEnterPassword} onChange={ handleChange } style={{width: 300, height: 50}}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

            <div className="my-2 grid place-content-center">
              <Button variant="contained" onClick={register} style={{width:120,height:50, backgroundColor: "#58549E"}}>Register</Button>
            </div>


              <div className="text-center">

              <Divider>Or</Divider>

                <p> sign up with</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#58549E' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#58549E' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#58549E' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#58549E' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>

   

  </>
  );
}

export default Register;