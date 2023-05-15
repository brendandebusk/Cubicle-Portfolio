// eslint-disable-next-line
import React, { useCallback, useState } from "react";
import "../App.css";

const Emulstir = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="block item emulstir block-small section-hidden" id='emulstir' onClick={useCallback = () => props.callback("chefn")}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
       <div className='block-title'>
      <h2>Chef'n Emulstir</h2>
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
      <h4>A patented and effortless tool to emulsify salad dressing.</h4>
    </div>
  );
};

export default Emulstir;
