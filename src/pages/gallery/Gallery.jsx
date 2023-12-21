import React from "react";
import "./gallery.css";
import { projects } from "./projects";

const Gallery = (id) => {
  return (
    <div className="gallery-container">
      {/* {gallery[0].title} */}
      {projects[0].images.map((image, i) => {
        console.log(`Image nr.${i + 1} is: ${image}`);
        return (
          <>
            <img alt="interior-image" src={image} key={i} />
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
