import React from 'react'
import Footer from '../Footer';
import HomeCards from './HomeCards';
import HomeContent from './HomeContent';
import Homehead from './Homehead';

const Home = () => {
  return (
    <div><Homehead />
    <HomeCards />
    <HomeContent />
    
    </div>
  )
}

export default Home