import { React, useState } from "react";
import "./home.css";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import { thumbnails } from "../../components/thumbnail/thumbnails";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Thumbnails = () => {
  const [load, setLoad] = useState(false);

  const [thumbnailsToShow, setThumbnailsToShow] = useState(6);

  const renderAdditionalThumbnails = () => {
    return thumbnails
      .slice(thumbnailsToShow, setThumbnailsToShow)
      .map((project, index) => (
        <Thumbnail
          key={index}
          title={project.title}
          src={project.src}
        ></Thumbnail>
      ));
  };

  return (
    <>
      <div className="thumbnails-container">
        {thumbnails.slice(0, thumbnailsToShow).map((project, index) => (
          <Link
            to={`project/${project.id}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <Thumbnail
              key={index}
              title={project.title}
              src={project.src}
            ></Thumbnail>
          </Link>
        ))}
      </div>
      {load && <>{renderAdditionalThumbnails()}</>}
      {thumbnailsToShow < thumbnails.length && (
        <div className="thumbnails-more">
          <button
            onClick={() => {
              setLoad(true);
              setThumbnailsToShow(thumbnailsToShow + 3);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Thumbnails;
