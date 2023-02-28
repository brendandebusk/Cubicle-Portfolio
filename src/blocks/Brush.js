// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const Brush = (props) => {
  return (
    <div className="block item brush block-small section-hidden" id='brush' onClick={useCallback = () => props.callback("brush")}>
       <div className='block-title'>
      <h2>Philips Sonicare 9900 Prestige</h2>
      <div className='spacer'></div>
            <div className='launch-button launch-button-dark'>+</div>
        </div>
      <h4>Exceptional oral healthcare personalized to you.</h4>
    </div>
  );
};

export default Brush;
