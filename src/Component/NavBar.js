import {React, useState } from 'react'
import "../Assets/Css/Navbar.css"
import Avatar from '@mui/material/Avatar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Image from "../Assets/Image/profile-pic.jpg"


const NavBar = () => {
//   const [themeMode, setThemeMode] = useState("dark");

// const theme = createTheme({
//   palette: {
//     mode: themeMode,
//   },
// });
  
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <div className="nav-bars">
       <div className="nav-logo">
       <Avatar alt="Cindy Baker" src={Image} />
       <h3>Aruna B</h3>
       </div>
       <div>
           <ul className='nav-pages'>
               <li onClick={()=>{window.location.replace("/")}}>Home</li>
               <li onClick={()=>{window.location.replace("/About")}}>About</li>
               <li onClick={()=>{window.location.replace("/Skills")}}>Skills</li>
               <li onClick = {()=>{window.location.replace("/Projects")}}>Project</li>
               <li onClick = {()=>{window.location.replace("/Contact")}}>Contact</li>
               {/* <Button className="theme-btn"
        color="inherit"
        startIcon = {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={()=> setThemeMode(themeMode == "dark" ? "light" : "dark")} >{themeMode =="dark" ? "Light" : "Dark"} Mode</Button> */}
 

           </ul>
       </div>
    </div>
    // </ThemeProvider>

  )
}

export default NavBar