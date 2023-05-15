// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const TrueCommute = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="block item block-big true-commute section-hidden" id='truecommute' onClick={useCallback = () => props.callback("truecommute")}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
        <div className='block-title'>
        <h2>TrueCommute</h2>
        <div className='spacer'></div>
        <div className={hover ? 'launch-button launch-button-light launch-button-hover' : 'launch-button launch-button-light'}>{hover ? "Learn more" : "+"}</div>
        </div>
        <h4>Weather aware commute predictions, fully responsive and built using React.</h4>
    </div>
  );
};

export default TrueCommute;
