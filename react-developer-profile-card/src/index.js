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
    <img
      className="avatar"
      src="../public/profile_image.png"
      alt="Florian Miller"
    />
  );
}

function Intro() {
  return <h1>Florian Miller</h1>;
}

function SkillList() {
  return <p>ich</p>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
