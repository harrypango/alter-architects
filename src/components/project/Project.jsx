import React from "react";
import "./project.css";

const Project = ({ title, src }) => {
  return (
    <>
      <div className="project">
        <img src={src} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Project;
