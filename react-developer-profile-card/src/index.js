import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

const skills = [
  {
    title: "HTML & CSS",
    level: "advanced",
    bgColor: "MediumOrchid",
  },
  {
    title: "Ruby on Rails",
    level: "intermediate",
    bgColor: "DarkOrange",
  },
  {
    title: "JavaScript",
    level: "beginner",
    bgColor: "DodgerBlue",
  },
  {
    title: "Webdesign",
    level: "advanced",
    bgColor: "DeepPink",
  },
  {
    title: "Git & Github",
    level: "intermediate",
    bgColor: "LimeGreen",
  },
];

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
    <>
      <h1>Florian Miller</h1>
      <p>
        Full-Stack web developper. When not coding then surfscating or enjoying
        to cook and eat great food. Always happy to see the eyes of my kids.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => {
        return <Skill skill={skill} key={skill.title} />;
      })}
    </ul>
  );
}

function Skill({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.bgColor }}>
      <span>{skill.title} </span>
      <span>
        {skill.level === "advanced" && "💪"}
        {skill.level === "intermediate" && "🚩"}
        {skill.level === "beginner" && "🫤"}
      </span>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
