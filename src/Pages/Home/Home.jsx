import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text-container">
          <div>Home</div>
          <MdKeyboardArrowRight className="home-icon"/>
          <div>Courses</div>
          <MdKeyboardArrowRight className="home-icon"/>
          <div className="AI-Dev">AI-Machine Learning Developer</div>
        </div>
        <div className="home-h1">
          <h1 >AI-Machine Learning</h1>
        </div>
        <div className="developer">

          <h1>Developer</h1>
        </div>
        </div>
      
      <div className="home-image-container">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*qHSGsn25kUmdoDUIdron1w.jpeg"
          alt="AI-Machine Learning Developer"
        />
      </div>
    </div>
  );
};

export default Home;
