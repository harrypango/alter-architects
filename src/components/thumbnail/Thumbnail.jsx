import React from "react";
import "./thumbnail.css";

const Thumbnail = ({ title, src }) => {
  return (
    <>
      <div className="project">
        <img src={src} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Thumbnail;
