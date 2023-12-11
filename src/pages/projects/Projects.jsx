import React from "react";
import "./projects.css";
import Project from "../../components/project/Project";

const Projects = () => {
  return (
    <div className="projects-container section__margin">
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </div>
  );
};

export default Projects;
