import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "PROBABILISTIC AND STATISTICAL METHODS FOR LEARNING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "DEEP LEARNING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "PROJECT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const [selectedDescriptions, setSelectedDescriptions] = useState({});
  const [selectedTitle, setSelectedTitle] = useState(null);

  // Function to handle title click and toggle the display of description
  const handleTitleClick = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescriptions((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
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
              selectedTitle === item.title ? "selected" : ""
            }`}
            onClick={() => handleTitleClick(item.title, item.description)}
          >
            <div>{item.title}</div>
            {selectedDescriptions[item.title] ? <FiMinus /> : <GoPlus />}
          </div>
          {selectedDescriptions[item.title] && (
            <div
              className={`syllabus-description ${
                selectedTitle === item.title ? "selected" : ""
              }`}
            >
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Syllabus;
