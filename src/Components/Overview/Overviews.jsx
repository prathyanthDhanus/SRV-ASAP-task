import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { GrUserExpert } from "react-icons/gr";
import "./Overview.css";

const Overviews = () => {
  return (
    <div>
      <div>
        <h2>Overview</h2>
      </div>

      <div className="overview-container">
        <div className="duration">
          <FaRegClock className="duration-clockicon" />
          <div>
            <p className="duration-title">Duration</p>
            <h4 className="duration-value">720 Hours</h4>
          </div>
        </div>

        <div className="course">
          <CiVideoOn className="course-vdoicon" />
          <div>
            <p className="course-title">Course Mode</p>
            <h4 className="course-value">Offline</h4>
          </div>
        </div>

        <div className="eligibility">
          <GrUserExpert className="eligibility-icon" />
          <div>
            <p className="eligibility-title">Eligibility</p>
            <h4 className="eligibility-value">
              Graduate, preferably in Science, CS, IT and EC streams
            </h4>
          </div>
        </div>

        <div className="training">
          <h3>Training Partner</h3>
          <div className="training-icons">
            <img
              src="https://asapkerala.gov.in/wp-content/uploads/2021/10/ASAP-logo-28-1.png"
              alt="ASAP Kerala"
            />
            <img
              src="https://media.licdn.com/dms/image/C560BAQGBGDlP9--9rg/company-logo_200_200/0/1631355535342?e=2147483647&v=beta&t=9QzdeGgzUYh9UDVrXRwSgoyM5AKkt3-HarQDQIGNrl8"
              alt="curvelogics"
            />
          </div>
        </div>

        <div className="certificate">
          <h3>Certification Partner</h3>
          <div className="certificate-icons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/IIT_Palakkad_Logo.svg/1200px-IIT_Palakkad_Logo.svg.png"
              alt="IIT Palakkad"
            />
            <img
              src="https://media.licdn.com/dms/image/D560BAQHTNnwO31UtCg/company-logo_200_200/0/1666110854545?e=2147483647&v=beta&t=OlXTsJt0s1lpkHBjAeMj-gXm8PrqpDbk00BsrN1abuQ"
              alt="NCVET logo"
            />
            <img
              src="https://media.licdn.com/dms/image/C4D22AQFqLXG0GnkyoA/feedshare-shrink_800/0/1649744802957?e=2147483647&v=beta&t=YXLujbTS0IAtxdlmoavw3mjge2VE3KfDE3KVMs-roZI"
              alt="L&T Edutech Logo"
            />
          </div>
        </div>
      </div>
      <p>
      Additional Skill Acquisition Programme (ASAP) Kerala is a Section-8 Company of the Department of Higher Education, Government of Kerala, that focusses on skilling students and the general community to enhance their employability.
        Instituted in 2012, ASAP Kerala transitioned to a company under the Companies Act, 2013, in 2021.<br/>
       With nearly a decade of service, we at ASAP Kerala have become a premier government ed Tech company, building integrated learning and talent management solutions, ASAP Kerala has nearly become synonymous with skilling, upskilling and reskilling in corporate and academic domains, by offering 150+ contemporary courses in 19 domains.
       
      </p>
    </div>
  );
};

export default Overviews;
