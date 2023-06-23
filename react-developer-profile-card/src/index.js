import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="profile_image.png" alt="Florian Miller" />
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

function SkillList() {
  return (
    <li className="skill-list">
      <Skill skill="HTML & CSS" emoji="🌈" bgColor="MediumOrchid" />
      <Skill skill="Ruby on Rails" emoji="💎" bgColor="DarkOrange" />
      <Skill skill="JavaScript" emoji="🚩" bgColor="DodgerBlue" />
      <Skill skill="Webdesign" emoji="👏" bgColor="DeepPink" />
      <Skill skill="Git & Github" emoji="😎" bgColor="LimeGreen" />
    </li>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
