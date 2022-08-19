import React from 'react'
import "../../Assets/Css/Contact.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Contact = () => {
    const styles={
        width:"400px",
        height:"50px",
        backgroundColor:"rgb(70, 69, 67)"
    }
  return (
    <div className='Contact-container'>
        <div className='contact-me'>
        <h3></h3>
        {/* <label for="name" >Name</label> */}
        <TextField className='input-box1' id="standard-basic" label="Name" variant="filled" />
        <TextField className='input-box1' id="standard-basic" label="Email" variant="filled" />
        <TextField className='input-box2' id="standard-basic" label="Message" variant="filled" />

        <Button variant="contained" style={styles}
        onClick={()=>window.location.reload()}
        >CONTACT ME</Button>
        </div>
    </div>
  )
}

export default Contact