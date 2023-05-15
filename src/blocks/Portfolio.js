// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Portfolio = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="block item portfolio block-small section-hidden"
      id="portfolio"
      onClick={(useCallback = () => props.callback("portfolio"))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="block-title">
        <h2>Portfolio</h2>
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
      <h4>This website: a custom online porfolio, built using React.</h4>
    </div>
  );
};

export default Portfolio;
