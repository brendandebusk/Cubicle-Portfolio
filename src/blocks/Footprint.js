// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Footprint = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="block item footprint block-full section-hidden"
      id="footprint"
      onClick={(useCallback = () => props.callback("footprint"))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="block-title">
        <h2>Footprint</h2>
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
        A super simple tool for organizing and tracking your job hunt. Helping you leave your mark.
      </h4>
    </div>
  );
};

export default Footprint;
