import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home/Home';
import Overviews from '../Components/Overview/Overviews';
import Syllabus from '../Components/Syllabus/Syllabus';
import Coursefee from '../Components/Coursefee/Coursefee';


const Landingpage = () => {
  return (
    <div>
  <Navbar/>
  <Home/>
  <Overviews/>
  <Syllabus/>
  <Coursefee/>
    </div>
  )
}

export default Landingpage