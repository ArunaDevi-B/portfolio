import React from 'react'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Avatar from '@mui/material/Avatar';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


const HomeContent = () => {
  return (
    <div className="home-content-page">
        <h1>MY DEVELOPING PROCESS</h1>
        <p className='empty-border'></p>
        <h5>All of my development process based of practical formula to get the result that I am looking for</h5>

        <div className="home-content-cards">
            <div className="home-content-card">
               <Avatar className="avatar">
               <TextSnippetIcon className='icons'/>
               </Avatar>   
               <h3>Discuss the project</h3>
               <p>In this stage, I will talk about the entire process of developing a website.

It starts with building a website plan to launching the website.
Collect Information. 
Website Planning.
Website Design.
Content Creation.
Development.
Testing.
Launch and Maintenance.</p>
            </div>
            <div className="home-content-card">
               <Avatar className="avatar">
               <DesktopWindowsIcon className='icons' />
               </Avatar>   
               <h3>BRAINSTORM & CONCEPT</h3>
               <p>Brainstorming combines an informal approach to problem-solving with lateral thinking, which is a method for developing new concepts to solve problems by looking at them in innovative ways. Some of these ideas can be built into original, creative solutions to a problem, while others can generate additional ideas.</p>
            </div>
            <div className="home-content-card">
               <Avatar className="avatar">
               <ContentCopyIcon className='icons' />
               </Avatar>   
               <h3>UI/UX PLANNING</h3>
               <p>The UI/UX design phase usually involves a pre-design stage, design research, and four other main stages: sketching, wireframing, visualization, and slicing.</p>
            </div>
            <div className="home-content-card">
               <Avatar className="avatar">
               <ThumbUpOffAltIcon className='icons'/>
               </Avatar>   
               <h3>INTERACTION</h3>
               <p>Interaction design is a process in which I focus on creating engaging web interfaces with logical and thought out behaviors and actions. Successful interactive design uses technology and principles of good communication to create</p>
            </div>
        </div>
    </div>
  )
}

export default HomeContent