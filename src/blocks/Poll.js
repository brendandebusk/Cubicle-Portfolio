// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Poll = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="block item pollbox block-full section-hidden"
      id="pollbox"
      onClick={(useCallback = () => props.callback("pollbox"))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="block-title">
        <h2>Poll Box</h2>
        <div className="spacer"></div>
        <div
          className={
            hover
              ? "launch-button launch-button-light launch-button-hover"
              : "launch-button launch-button-light"
          }
        >
          {hover ? "Learn more" : "+"}
        </div>
      </div>
      <h4>
        A simple poll box for integrating surveys into your website. Responsive and built using React.
      </h4>
    </div>
  );
};

export default Poll;
