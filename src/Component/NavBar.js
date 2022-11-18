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
               <li> <a 
               className='resume'
                href='https://drive.google.com/file/d/1_RkuFCoLqvQjnyYgvBoyMy8LLu3BDwJ4/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume </a></li>
               
           </ul>
       </div>
    </div>

  )
}

export default NavBar