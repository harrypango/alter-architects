import React from "react";
import "./thumbnail.css";

const Thumbnail = ({ title, src, width, height }) => {
  // eslint-disable-next-line react/prop-types
  const altTag = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <div className="project">
        <img src={src} alt={altTag} width={width} height={height} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Thumbnail;
