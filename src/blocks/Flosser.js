// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const Flosser = (props) => {
  return (
    <div className="block item flosser block-small section-hidden" id='flosser' onClick={useCallback = () => props.callback("flosser")}>
      <div className='block-title'>
      <h2>Philips Sonicare Power Flosser</h2>
      <div className='spacer'></div>
      <div className='launch-button launch-button-light'>+</div>
        </div>
      <h4>Flossing, reinvented.</h4>
    </div>
  );
};

export default Flosser;
