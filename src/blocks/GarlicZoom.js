// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const GarlicZoom = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="block item garlic block-big section-hidden"
      id="garliczoom"
      onClick={(useCallback = () => props.callback("chefn"))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="block-title">
        <h2>Chef'n GarlicZoom</h2>
        <div className="spacer"></div>
        <div
          className={
            hover
              ? "launch-button launch-button-dark launch-button-hover"
              : "launch-button launch-button-dark"
          }
        >
          {hover ? "Learn more" : "+"}
        </div>
      </div>
      <h4>A quick, easy, and fun tool to chop garlic.</h4>
    </div>
  );
};

export default GarlicZoom;
