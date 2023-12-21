import { React, useState } from "react";
import "./home.css";
import Project from "../../components/project/Project";
import { thumbnails } from "./thumbnails";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Projects = () => {
  const [load, setLoad] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(6);

  const renderAdditionalProjects = () => {
    return thumbnails
      .slice(projectsToShow, setProjectsToShow)
      .map((project, index) => (
        <Project key={index} title={project.title} src={project.src}></Project>
      ));
  };

  return (
    <>
      <div className="projects-container">
        {thumbnails.slice(0, projectsToShow).map((project, index) => (
          <Link
            to={`gallery/project-${project.id}`}
            style={{ textDecoration: "none" }}
          >
            <Project
              key={index}
              title={project.title}
              src={project.src}
            ></Project>
          </Link>
        ))}
      </div>
      {load && <>{renderAdditionalProjects()}</>}
      {projectsToShow < thumbnails.length && (
        <div className="projects-more">
          <button
            onClick={() => {
              setLoad(true);
              setProjectsToShow(projectsToShow + 3);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;
