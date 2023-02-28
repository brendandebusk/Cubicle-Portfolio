// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const TrueCommute = () => {
  return (
    <div className="block item block-big true-commute section-hidden" id='truecommute' onClick={useCallback = () => window.open('https://www.truecommute.app', '_blank', "noreferrer")}>
        
        <div className='block-title'>
        <h2>TrueCommute</h2>
        <div className='spacer'></div>
            <div className='hyperlink-button hyperlink-button-dark'>➜</div>
        </div>
        <h4>Weather aware commute predictions, fully responsive and built using React.</h4>
    </div>
  );
};

export default TrueCommute;
