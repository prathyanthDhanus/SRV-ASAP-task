import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
    <div className='nav-logo'>
      <img src='https://asapkerala.gov.in/wp-content/uploads/2021/10/ASAP-logo-28-1.png'/>
    </div>
    <div className='nav-details'>
    <h4>Courses</h4>
    <h4>Events</h4>
    <h4>Skill Parks</h4>
    <h4>About</h4>
    <h4>Contact</h4>
    <h4 className='nav-login'>Login</h4>
    <div className='nav-getstart'>Get Started</div>
    </div>
    
    </div>
  );
};

export default Navbar;