import React from "react";
import "./App.css";

const AboutMe = () => {
  return (
    <div className="block-opener about-me">
      <h1>
        Hi! I'm Brendan DeBusk, a self taught frontend web developer based in
        San Francisco.
      </h1>
      <h4>
        After spending nearly a decade working in high volume consumer product
        development, in roles ranging from product design to technical
        operations, I took the plunge into web development in the fall of 2022.
        <br></br>
        <br></br>
        Ex-Apple (TDG). Mechanical engineering background.
        <br></br>
        <br></br>
        <span className='span'>Currently looking for work opportunities.</span>
      </h4>
      <div className='spacer'></div>
      <div className="links">
      <a href="mailto:brendandebusk@gmail.com" target="_blank" rel="noreferrer"><div className='link-button'>Email</div></a>
        <a href="https://www.linkedin.com/in/brendandebusk/" target="_blank" rel="noreferrer"><div className='link-button'>LinkedIn</div></a>
        <a href="https://drive.google.com/file/d/1v-z1DzO5paKA37rB2MEXUCKZD2WKqaqC/view?usp=sharing" target="_blank" rel="noreferrer"><div className='link-button'>Resume</div></a>
        <a href="https://github.com/brendandebusk" target="_blank" rel="noreferrer"><div className='link-button'>GitHub</div></a>
      </div>
    </div>
  );
};

export default AboutMe;
