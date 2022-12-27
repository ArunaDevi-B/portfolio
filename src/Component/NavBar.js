import {React} from 'react'
import "../Assets/Css/Navbar.css"
import Avatar from '@mui/material/Avatar';
import Image from "../Assets/Image/profile-pic.jpg"


const NavBar = () => {
  return (
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
               <li onClick = {()=>{window.location.replace("/contact")}}>Contact</li>
               
           </ul>
       </div>
    </div>

  )
}

export default NavBar