import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Syllabus.css"


const Syllabus = () => {
  const syllabusData = [
    {
      title: "FOUNDATION FOR MACHINE LEARNING",
      description:
        "Linear Algebra , Random processes and optimisation tachniques for macine learning.Develope programming solutions in Python with scientific python liabraries"
    },
    {
      title: "MACHINE LEARNING TECHNIQUES",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.When an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "PROBABILISTIC AND STATISTICAL METHODS FOR LEARNING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.When an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "DEEP LEARNING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.When an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "PROJECT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];
  const [selectedDescription, setSelectedDescription] = useState(null);

  // Function to handle title click and toggle the display of description
  const handleTitleClick = (title) => {
    setSelectedDescription(selectedDescription === title ? null : title);
  };

  return (
    <div>
      <div>
        <h2>Syllabus</h2>
      </div>
      <div className="syllabus-container">
        {syllabusData.map((item) => (
          <div key={item.title} className="syllabus-item">
            <div
              className={`syllabus-title ${
                selectedDescription === item.title ? "selected" : ""
              }`}
              onClick={() => handleTitleClick(item.title)}
            >
              <div>{item.title}</div>
              {selectedDescription === item.title ? <FiMinus /> : <GoPlus />}
            </div>
            {selectedDescription === item.title && (
              <div className={`syllabus-description ${selectedDescription === item.title ? "selected" : ""}`}>
                {item.description.split(".").map((part, index) => (
                   <div key={index} className="sentence-container">
                    <div>
                   <FaRegCheckCircle className="checkmark-icon" style={{ width: "20px", height: "20px" }} />

                    </div>
                   <p>{part}</p>
                 </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
