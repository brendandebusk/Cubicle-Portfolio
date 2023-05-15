// eslint-disable-next-line
import React from "react";
import "../App.css";

const Timeline = () => {
  return (
    <div className="block timeline section-hidden block-full" id="timeline">
      <div className="timeline-card">
        <div className="timeline-card-circle"></div>
        <h1>Apple</h1>
        <h4>Technical Program Manager - Technology Development Group</h4>
        <div className='timeline-card-date'><h4>June 2020 - Sept 2022</h4></div>
      </div>
      <div className="timeline-card">
      <div className="timeline-card-circle"></div>
        <h1>Philips Sonicare</h1>
        <h4>Design Engineer</h4>
        <div className='timeline-card-date'><h4>April 2018 - May 2020</h4></div>
      </div>
      <div className="timeline-card">
      <div className="timeline-card-circle"></div>
        <h1>Lifetime Brands</h1>
        <h4>Design Engineer - Chef'n</h4>
        <div className='timeline-card-date'><h4>Oct 2016 - April 2018</h4></div>
      </div>
      <div className="timeline-card">
      <div className="timeline-card-circle"></div>
        <h1>Lifetime Brands</h1>
        <h4>Project Engineer - Taylor</h4>
        <div className='timeline-card-date'><h4>Aug 2015 - Oct 2016</h4></div>
      </div>
      <div className="timeline-card">
      <div className="timeline-card-circle"></div>
        <h1>Accelerated Machine Design & Engineering</h1>
        <h4>Mechanical Design Engineer</h4>
        <div className='timeline-card-date'><h4>Jan 2015 - Aug 2015</h4></div>
      </div>
    </div>
  );
};

export default Timeline;
