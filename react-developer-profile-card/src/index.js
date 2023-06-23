import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList
          skillOne={{ text: "HTML & CSS🌈", bgColor: "MediumOrchid" }}
          skillTwo={{ text: "Ruby on Rails💎", bgColor: "DarkOrange" }}
          skillThree={{ text: "JavaScript🚩", bgColor: "DeepSkyBlue" }}
          skillFour={{ text: "Webdesign👏", bgColor: "DeepPink" }}
          skillFive={{ text: "Git & Github😎", bgColor: "LimeGreen" }}
        />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="../public/profile_image.png"
      alt="Florian Miller"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Florian Miller</h1>
      <p>
        Full-Stack web developper. When not coding then surfscating or enjoying
        to cook and eat great food. Always happy to see the eyes of my kids.
      </p>
    </div>
  );
}

function SkillList(props) {
  console.log(props);

  return (
    <li className="skill-list">
      <div
        className="skill"
        style={{ backgroundColor: `${props.skillOne.bgColor}` }}
      >
        <span>{props.skillOne.text}</span>
      </div>
      <div
        className="skill"
        style={{ backgroundColor: `${props.skillTwo.bgColor}` }}
      >
        <span>{props.skillTwo.text}</span>
      </div>
      <div
        className="skill"
        style={{ backgroundColor: `${props.skillThree.bgColor}` }}
      >
        <span>{props.skillThree.text}</span>
      </div>
      <div
        className="skill"
        style={{ backgroundColor: `${props.skillFour.bgColor}` }}
      >
        <span>{props.skillFour.text}</span>
      </div>
      <div
        className="skill"
        style={{ backgroundColor: `${props.skillFive.bgColor}` }}
      >
        <span>{props.skillFive.text}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
