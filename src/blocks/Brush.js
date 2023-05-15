// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Brush = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="block item brush block-small section-hidden"
      id="brush"
      onClick={(useCallback = () => props.callback("brush"))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="block-title">
        <h2>Philips Sonicare 9900 Prestige</h2>
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
      <h4>Exceptional oral healthcare personalized to you.</h4>
    </div>
  );
};

export default Brush;
