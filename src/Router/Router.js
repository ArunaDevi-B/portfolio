import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from '../Component/About/About';
import Contact from '../Component/Contact/Contact';
import Home from '../Component/Home/Home';
import Project from '../Component/Projects/Project';
import Skill from '../Component/Skills/Skill';

const Router = () => {
  
  return (
<BrowserRouter>
<Routes>
    <Route exact path ="/" element={<Home/>}  />
    <Route exact path ="/About" element={<About />} />
    <Route exact path ="/Skills" element={<Skill />} />
    <Route exact path ="/ProjectS" element={<Project />} />
    <Route exact path ="/Contact" element={<Contact />}  />

</Routes>
</BrowserRouter>  )
}

export default Router