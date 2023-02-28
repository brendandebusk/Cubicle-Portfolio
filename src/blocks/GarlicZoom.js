// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const GarlicZoom = (props) => {
  return (
    <div className="block item garlic block-big section-hidden" id='garliczoom' onClick={useCallback = () => props.callback("chefn")}>
      <div className='block-title'>
      <h2>Chef'n GarlicZoom</h2>
      <div className='spacer'></div>
      <div className='launch-button launch-button-dark'>+</div>
            </div>
      <h4>A quick, easy, and fun tool to chop garlic.</h4>
    </div>
  );
};

export default GarlicZoom;
