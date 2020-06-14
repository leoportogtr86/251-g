import React from "react";
import './Base.css'

export default (props) => {
  return (
    <div>
      <iframe
        className = 'base'
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XTa8eS1Atd4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
