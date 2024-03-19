import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home/Home';
import Overviews from '../Components/Overview/Overviews';
import Syllabus from '../Components/Syllabus/Syllabus';


const Landingpage = () => {
  return (
    <div>
  <Navbar/>
  <Home/>
  <Overviews/>
  <Syllabus/>
    </div>
  )
}

export default Landingpage