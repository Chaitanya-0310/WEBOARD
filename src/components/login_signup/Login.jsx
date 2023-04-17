import React, {useState} from "react"
import "./login.css"
import Navbar from "../LandingPage/Navbar"
import '../assets/login.svg'
import { ReactComponent as Logo } from "../assets/login.svg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';




const Login = ({ updateUser}) => {
  const navigate = useNavigate()

  

  const [ user, setUser] = useState({
    email:"",
    password:""
})


const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}

const login = () => {
  
  axios.post("http://localhost:9002/login", user)
  .then(res => {
       toast.success("login successful")  
      // alert(res.data.message)
      // updateUser(res.data.user)
      navigate("/Dashboard")

  })
  .catch(res => {
    toast.error("Password Incorrect")
  })


}

    return (
      <>
        <Navbar/>

        <div className='ml-20'>
        <Logo style={{width:600, height:600}}/>
 
        </div>

        <div className="login">
            <h1>Login</h1>
            <div className="input-form">
              <TextField id="email" name="email" type="text" value={user.email} onChange={handleChange} label="Enter your Email" variant="outlined" style={{width: 350, height: 30}}  />
            </div>
            <div className="input-form">
              <TextField id="password" name="password" type="password" value={user.password} onChange={handleChange} label="Enter your Password" variant="outlined" style={{width: 350, height: 55}} className="input-form" />
            </div>

            <div className="my-2">
              <Button variant="contained" onClick={login} style={{width:120,height:50, backgroundColor: "#58549E"}}>Login</Button>
            </div>

             <Divider>Or</Divider>
            
            <div className="my-2">
              <Link onClick={() => navigate.push("/register")} exact to ="/register">
                <Button variant="contained" style={{width:120,height:50, backgroundColor: "#58549E"}}>Register</Button>
              </Link>
            </div>
              
        </div>
      </>  
    )
}

export default Login