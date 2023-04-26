import { Button } from '@mui/material';
import React from 'react';
import "../../Assets/Css/About.css";
import Image from "../../Assets/Image/profile-pic.jpg"

const About = () => {
  const styles={
    margin: "20px",
  }
  return (
    <div className='about-page'>
        <div className="about-image">
            <img src={Image} />
        </div>
        <div className='about-me'>
            <h3>ABOUT ME</h3>
            <h4 className='heading'>I am a JavaScript Developer</h4>
            <p className='empty-border'></p>
            <p className='about-para'>Myself Aruna Devi B, a Web Developer with a passion for web application development and
success in managing development projects. Proven experience in developing applications using HTML, CSS and JavaScript. Skilled in conceptualizing, designing and developing software. Recently I got crush on JavaScript. JS made me feel like wow!!!. One of the most beautiful language across the globe. When many felt JS as a difficult one, I found it as an interesting language. Because of JavaScript I become so passionate in this field. I am looking forward to learn more and more concepts of JavaScript. Seeking for a good opportunity to utilize my skills with an expertise. Being true to myself I work passionately for my growth along with the organizational growth. </p>
<Button
// color="inherit"
sx={{ bgcolor: 'grey.900'}}
        style={styles}
        variant="contained" href="https://drive.google.com/file/d/12vfPKFZ6ppPpD5_ML4db4NfD5BKtZwQt/view" target="_blank">
Resume
</Button>
        </div>
    </div>
  )
}

export default About