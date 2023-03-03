import React, { useState } from "react";
import "./App.css";
import AboutMe from "./AboutMe.js";
import Portrait from "./Portrait.js";
import TrueCommute from "./blocks/TrueCommute.js";
import Portfolio from "./blocks/Portfolio.js";
import Flosser from "./blocks/Flosser.js";
import Brush from "./blocks/Brush.js";
// import Apple from './blocks/Apple.js';
import Mandoline from "./blocks/Mandoline.js";
import GarlicZoom from "./blocks/GarlicZoom.js";
import Emulstir from "./blocks/Emulstir.js";
import Overlay from "./Overlay.js";

const Body = () => {
  const [overlay, setOverlay] = useState(false);
  const [item, setItem] = useState("");

  const handleCallback = (value) => {
    setItem(value);
    setOverlay(true);
  };

  const resetOverlay = () => {
    setOverlay(false);
  };

  return (
    <div>
      {overlay === true ? <Overlay item={item} reset={resetOverlay} /> : null}
      <div className="body">
        <div className="section-opener section-hidden" id='opener'>
          <AboutMe />
          <Portrait />
        </div>
        <div className="section-title section-hidden" id='web'>
          Web Development
        </div>
        <div className="section">
          <Portfolio callback={handleCallback}/>
          <TrueCommute callback={handleCallback}/>
        </div>
        <div className="section-title section-hidden" id="product">
          Product Development
        </div>

        <div className="section">
          {/* <Apple /> */}
          <Flosser callback={handleCallback} />
          <Brush callback={handleCallback} />
          <Mandoline callback={handleCallback} />
          <Emulstir callback={handleCallback} />
          <GarlicZoom callback={handleCallback} />
        </div>
      </div>
    </div>
  );
};

export default Body;
