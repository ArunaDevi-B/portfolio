import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import "../../Assets/Css/Home.css";

const HomeCards = () => {
    
  return (
    <div className="home-cards-container">
        <div className="home-card1">
        <GroupsIcon className="card-icon"   />
            <h6>Clients</h6>
            <h6>70</h6>
        </div>
        <div className="home-card1">
        <WorkspacePremiumIcon className="card-icon"/>
            <h6>Awards</h6>
            <h6>3</h6>
        </div>
        <div className="home-card1">
        <HourglassTopIcon className="card-icon"/>
            <h6>Hours Worked</h6>
            <h6>2500</h6>
        </div>
        <div className="home-card1">
        <AccountTreeIcon className="card-icon"/>
            <h6>Projects Completed</h6>
            <h6>5</h6>
        </div>
    </div>
  )
}

export default HomeCards