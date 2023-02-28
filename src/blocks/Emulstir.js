// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const Emulstir = (props) => {
  return (
    <div className="block item emulstir block-small section-hidden" id='emulstir' onClick={useCallback = () => props.callback("chefn")}>
       <div className='block-title'>
      <h2>Chef'n Emulstir</h2>
      <div className='spacer'></div>
      <div className='launch-button launch-button-light'>+</div>
        </div>
      <h4>A patented and effortless tool to emulsify salad dressing.</h4>
    </div>
  );
};

export default Emulstir;
