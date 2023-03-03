// eslint-disable-next-line
import React, { useCallback } from "react";
import "../App.css";

const Portfolio = (props) => {

    return (
        <div className="block item portfolio block-small section-hidden" id='portfolio' onClick={useCallback = () => props.callback("portfolio")}>
            
        <div className='block-title' >
            <h2>Portfolio</h2>
            <div className='spacer'></div>
            <div className='launch-button launch-button-dark'>+</div>
            </div>
        <h4>This website: a custom online porfolio, built using React.</h4>
        </div>
    )

}

export default Portfolio;