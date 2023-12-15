import { React, useState } from "react";
import "./projects.css";
import Project from "../../components/project/Project";
import { projects } from "../../pages/projects/allProjects";

const Projects = () => {
  const [load, setLoad] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(6);

  const renderAdditionalProjects = () => {
    return projects
      .slice(projectsToShow, setProjectsToShow)
      .map((project, index) => (
        <Project key={index} title={project.title} src={project.src}></Project>
      ));
  };

  return (
    <>
      <div className="projects-container">
        {projects.slice(0, projectsToShow).map((project, index) => (
          <Project
            key={index}
            title={project.title}
            src={project.src}
          ></Project>
        ))}
      </div>
      {load && <>{renderAdditionalProjects()}</>}
      {projectsToShow < projects.length && (
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
