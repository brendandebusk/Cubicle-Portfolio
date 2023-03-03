// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const TrueCommute = (props) => {
  return (
    <div className="block item block-big true-commute section-hidden" id='truecommute' onClick={useCallback = () => props.callback("truecommute")}>
        
        <div className='block-title'>
        <h2>TrueCommute</h2>
        <div className='spacer'></div>
        <div className='launch-button launch-button-light'>+</div>
        </div>
        <h4>Weather aware commute predictions, fully responsive and built using React.</h4>
    </div>
  );
};

export default TrueCommute;
