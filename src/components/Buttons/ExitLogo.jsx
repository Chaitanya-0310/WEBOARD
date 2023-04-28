import React from 'react'
import './Exitlogo.css'
import { IconButton,Tooltip } from '@mui/material'
import { BiLogOut } from 'react-icons/bi'
import {Link} from 'react-router-dom'

const ExitLogo = () => {
  return (
    <>
      <div className='exitlogo'>
        <Tooltip title="Go To Dashboard"> 
        <Link exact to = "/Dashboard"> <IconButton color="primary" href="#contained-buttons" className='button_logout' style={{backgroundColor: "#58549E", color: "black", width:40, height:40, borderRadius:4}}>
          <BiLogOut style={{width:45, height:30, color: 'white'}} />
        </IconButton>
        </Link>
        </Tooltip>
        </div>
    </>
  )
}

export default ExitLogo
