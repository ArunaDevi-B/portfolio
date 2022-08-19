import {React, useState } from 'react'
import "../Assets/Css/Navbar.css"
import Avatar from '@mui/material/Avatar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


  

const NavBar = () => {
  
  return (
    <div className="nav-bars">
       <div className="nav-logo">
       <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbXL4gigbxAaatMXgD5f5qS6MJ-i-P-PscTsNTyYGU_gY1AAer_3UkYPq90Fy3_6_lcI&usqp=CAU" />
       <h3>Aruna Devi B</h3>
       </div>
       <div>
           <ul className='nav-pages'>
               <li onClick={()=>{window.location.replace("/")}}>Home</li>
               <li onClick={()=>{window.location.replace("/About")}}>About</li>
               <li onClick={()=>{window.location.replace("/Skills")}}>Skills</li>
               <li onClick = {()=>{window.location.replace("/Projects")}}>Project</li>
               <li onClick = {()=>{window.location.replace("/Contact")}}>Contact</li>
           </ul>
       </div>
    </div>
  )
}

export default NavBar