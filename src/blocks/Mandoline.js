// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Mandoline = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="block item mandoline block-full section-hidden"
      id="mandoline"
      onClick={(useCallback = () => props.callback("chefn"))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="block-title">
        <h2>Chef'n Glass Mandoline</h2>
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
      <h4>
        A unique take on a kitchen staple, allowing you to see your slices as
        you go.
      </h4>
    </div>
  );
};

export default Mandoline;
