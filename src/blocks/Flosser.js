// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Flosser = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="block item flosser block-small section-hidden" id='flosser' onClick={useCallback = () => props.callback("flosser")}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <div className='block-title'>
      <h2>Philips Sonicare Power Flosser</h2>
      <div className='spacer'></div>
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
      <h4>Flossing, reinvented.</h4>
    </div>
  );
};

export default Flosser;
