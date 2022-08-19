import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "../../Assets/Css/Skill.css";
import { Avatar } from '@mui/material';

const Skill = () => {
  return (
    <div className='Skill-container'>
        <h1>MY SKILLS</h1>
        <div className='my-skills-container'>
            <div className='my-skill'>
               <div className='my-skill-head'>
                <CheckCircleOutlineIcon />
                <h4>Javascript</h4>
               </div>
               <div className='skill-content'>
               <img className="skill-icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgXxPvHKFrEp-UgUZ8H7APn-DL9xrJHgHPqoFUDBtcsRSZsCpEHGskYi0wbZcBvECpwM&usqp=CAU" />
              <p className='my-skill-content'>Designed by: Brendan Eich of Netscape initially; others have also contributed to the ECMAScript standard.</p>
               </div>
            </div>
            <div className='my-skill'>
               <div className='my-skill-head'>
                <CheckCircleOutlineIcon />
                <h4>Bootstrap</h4>
               </div>
               <div className='skill-content'>
               <img className="skill-icon"
                    src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" />
               <p className='my-skill-content'>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates.</p>
               </div>            
               </div>
            <div className='my-skill'>
               <div className='my-skill-head'>
                <CheckCircleOutlineIcon />
                <h4>HTML</h4>
               </div>
               <div className='skill-content'>
               <img className="skill-icon"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
               <p className='my-skill-content'>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and JavaScript.</p>
               </div>            </div>
            <div className='my-skill'>
               <div className='my-skill-head'>
                <CheckCircleOutlineIcon />
                <h4>React</h4>
               </div>
               <div className='skill-content'>
               <img className="skill-icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J1HeZ0INiiSCgncwvH-m6BC-KOmBKDPGsN2XU9G1G7neCf1VmGksjJslolZjdyll5uM&usqp=CAU" />
               <p className='my-skill-content'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
               </div>            </div>
            <div className='my-skill'>
               <div className='my-skill-head'>
                <CheckCircleOutlineIcon />
                <h4>CSS</h4>
               </div>
               <div className='skill-content'>
               <img className="skill-icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulnz6YBuAJR2Mhu23faS3DfvtdhVtJEfcht_A0K3bCUFCnaSe_NtM5eY_O_MMnTmRm6c&usqp=CAU" />
               <p className='my-skill-content'>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JS.</p>
               </div>            </div>
            <div className='my-skill'>
               <div className='my-skill-head'>
                <CheckCircleOutlineIcon />
                <h4>MySQl</h4>
               </div>
               <div className='skill-content'>
               <img className="skill-icon"
                    src="https://e7.pngegg.com/pngimages/31/556/png-clipart-dolphin-illustration-mysql-logo-icons-logos-emojis-tech-companies.png" />
               <p className='my-skill-content'>MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the abbreviation for Structured Query Language.</p>
               </div>            </div>
        </div>
        
    </div>
  )
}

export default Skill