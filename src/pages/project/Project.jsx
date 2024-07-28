import React from "react";
import "./project.css";
import { getProject, getProjects } from "./projects";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const Project = () => {
  const { id } = useParams();

  const project = getProject(id);
  const projects = getProjects();

  const currentIndex = projects.findIndex((p) => p.id === id);

  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="project-container">
      <img alt="project-thumbnail" src={project.images[0]} />
      <div className="project-info">
        <div className="project-info_left">
          <h1>{project.title.toUpperCase()}</h1>
          <p>{project.architects}</p>
          <p>{project.location}</p>
          <p>{project.year}</p>
        </div>
        <span>{project.description}</span>
      </div>
      <div className="project-container_horizontal">
        {project.images.slice(1).map((image, i) => {
          <img alt="interior-image" src={image} key={i} />;
        })}
      </div>
      <div className="project-container_vertical">
        {project.verticalImages.map((image, i) => {
          <img alt="interior-image" src={image} key={i} />;
        })}
      </div>
      <div className="project-previous-next">
        <div className="previous">
          {previousProject ? <img src={leftArrow} /> : ""}
          <Link
            to={`/project/${Number(project.id) - 1}`}
            style={{ textDecoration: "none" }}
            onClick={scrollToTop}
          >
            <p>{previousProject?.title}</p>
          </Link>
        </div>
        <div className="next">
          <Link
            to={`/project/${Number(project.id) + 1}`}
            style={{ textDecoration: "none" }}
            onClick={scrollToTop}
          >
            <p>{nextProject?.title}</p>
          </Link>
          {nextProject ? <img src={rightArrow} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Project;
