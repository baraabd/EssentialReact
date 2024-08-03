import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
    const description =
      reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  };

  export default Header;
