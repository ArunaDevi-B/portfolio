import React from 'react'
import "../../Assets/Css/Contact.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
    const styles={
        width:"400px",
        height:"50px",
        backgroundColor:"rgb(70, 69, 67)"
    }
  return (
    <div className='Contact-container'>
      <h1>CONTACT</h1>
        <div className='contact-me'>
           <div className='contact_div'><MailIcon sx={{ fontSize: 25 }} className='contact_icon'/> Mail me - b.arunadevi30@gmail.com</div>
           <div className='contact_div'><PhoneIcon sx={{ fontSize: 25 }} className='contact_icon'/>  +91 8870358324</div>
           <div className='contact_div'><GitHubIcon sx={{ fontSize: 25 }} className='contact_icon'/>  /ArunaDevi-B</div>
           <div className='contact_div'><LinkedInIcon sx={{ fontSize: 25 }} className='contact_icon'/>in/b-aruna30</div>
        </div>
    </div>
  )
}

export default Contact