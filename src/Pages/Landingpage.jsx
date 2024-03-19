import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home/Home';
import Overviews from '../Components/Overview/Overviews';


const Landingpage = () => {
  return (
    <div>
  <Navbar/>
  <Home/>
  <Overviews/>
    </div>
  )
}

export default Landingpage