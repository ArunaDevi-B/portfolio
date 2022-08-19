import React from 'react';
import "../../Assets/Css/About.css";
import Image from "../../Assets/Image/profile-pic.jpg"

const About = () => {
  return (
    <div className='about-page'>
        <div className="about-image">
            <img src={Image} />
        </div>
        <div className='about-me'>
            <h3>ABOUT ME</h3>
            <h4>I am a Web Developer</h4>
            <p className='empty-border'></p>
            <p className='about-para'>Myself Aruna Devi B, who recently got crush on JavaScript. JS made me feel wow!!!. One of the most beautiful language across the globe. When many felt JS as a difficult one, I found it as a interesting language. Because of JavaScript I become so passionate with this field. Though I know only few concepts in JS, I am looking forward to learn more and more concepts of JavaScript.<br></br><br></br> I </p>
        </div>
    </div>
  )
}

export default About