import React from 'react'
import Button from '@mui/material/Button';


function Homehead() {
  const styles={
    margin: "20px",
  }
  return (
    <div className="Home-head">
        <div className="home-head-content">
            <h1>I'm Aruna Devi B,</h1>
            <h2>A JavaScript Developer</h2>
            <Button onClick={()=>{window.location.replace("/About")}}
            color="inherit"
            style={styles}
            variant="outlined">About Me</Button>
        </div>
    </div>
  )
}

export default Homehead