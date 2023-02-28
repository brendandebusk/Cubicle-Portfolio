// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const Mandoline = (props) => {
  return (
    <div className="block item mandoline block-full section-hidden" id='mandoline' onClick={useCallback = () => props.callback("chefn")}>
      <div className='block-title'>
      <h2>Chef'n Glass Mandoline</h2>
      <div className='spacer'></div>
      <div className='launch-button launch-button-dark'>+</div>
      </div>
      <h4>A unique take on a kitchen staple, allowing you to see your slices as you go.</h4>
    </div>
  );
};

export default Mandoline;
