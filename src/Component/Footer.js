import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Assets/Css/Footer.css";
const Footer = () => {
  return (
    <div>
    <div style={{backgroundColor:"black", color:"white", padding:"20px"}} className='footer'> 
        <center className="footer-content">Copyright © 2022.All Rights Reserved</center>
        <div className='contact-icons'>
        <a href="https://github.com/ArunaDevi-B" target="_blank">
        <InstagramIcon className='contact-icon' color="primary" fontSize='large'/></a>
        <a href="https://github.com/ArunaDevi-B" target="_blank">
        <GitHubIcon 
        className='contact-icon' color="primary" fontSize='large'/></a>
        <a href="https://github.com/ArunaDevi-B" target="_blank">
        <LinkedInIcon className='contact-icon' color="primary" fontSize='large'/></a>
    </div>
    </div>
    </div>
  )
}

export default Footer