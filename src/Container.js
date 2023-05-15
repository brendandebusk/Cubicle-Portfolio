import React, { useEffect } from "react";
import "./App.css";
// import Header from './Header.js';
import Body from "./Body.js";

const Container = () => {
  useEffect(() => {
    const scrollFun = () => {

      const experience = document.getElementById("experience");
      const experienceBounds = experience.getBoundingClientRect();
      const experienceTop = experienceBounds.top;

      const product = document.getElementById("product");
      const productBounds = product.getBoundingClientRect();
      const productTop = productBounds.top;

      const web = document.getElementById("web");
      const webBounds = web.getBoundingClientRect();
      const webTop = webBounds.top;

      const timeline = document.getElementById("timeline");
      const timelineBounds = timeline.getBoundingClientRect();
      const timelineTop = timelineBounds.top;

      const skills = document.getElementById("skills");
      const skillsContent = document.getElementById("skillsContent");
      const skillsBounds = skills.getBoundingClientRect();
      const skillsTop = skillsBounds.top;

      const portfolio = document.getElementById("portfolio");
      const portfolioBounds = portfolio.getBoundingClientRect();
      const portfolioTop = portfolioBounds.top;

      const truecommute = document.getElementById("truecommute");
      const truecommuteBounds = truecommute.getBoundingClientRect();
      const truecommuteTop = truecommuteBounds.top;

      const flosser = document.getElementById("flosser");
      const flosserBounds = flosser.getBoundingClientRect();
      const flosserTop = flosserBounds.top;
      
      const emulstir = document.getElementById("emulstir");
      const emulstirBounds = emulstir.getBoundingClientRect();
      const emulstirTop = emulstirBounds.top;

      const brush = document.getElementById("brush");
      const brushBounds = brush.getBoundingClientRect();
      const brushTop = brushBounds.top;

      const garliczoom = document.getElementById("garliczoom");
      const garliczoomBounds = garliczoom.getBoundingClientRect();
      const garliczoomTop = garliczoomBounds.top;

      const mandoline = document.getElementById("mandoline");
      const mandolineBounds = mandoline.getBoundingClientRect();
      const mandolineTop = mandolineBounds.top;

      const pollbox = document.getElementById("pollbox");
      const pollboxBounds = pollbox.getBoundingClientRect();
      const pollboxTop = pollboxBounds.top;

      const footprint = document.getElementById("footprint");
      const footprintBounds = footprint.getBoundingClientRect();
      const footprintTop = footprintBounds.top;

      const viewportHeight = window.innerHeight;

      // console.log(viewportHeight-productTop);

      if ((viewportHeight-experienceTop) >= 40) {
        experience.classList.add("lineUp");
        experience.classList.remove('section-hidden');
      }

      if ((viewportHeight-productTop) >= 40) {
        product.classList.add("lineUp");
        product.classList.remove('section-hidden');
      }

      if ((viewportHeight-webTop) >= 40) {
        web.classList.add("lineUp");
        web.classList.remove('section-hidden');
      }

      if ((viewportHeight-timelineTop) >= 75) {
        timeline.classList.add("lineUp");
        timeline.classList.remove('section-hidden');
      }

      if ((viewportHeight-skillsTop) >= 75) {
        skills.classList.add("lineUp");
        skills.classList.remove('section-hidden');
        skillsContent.classList.add("lineUp");
        skillsContent.classList.remove('section-hidden');
      }

      if ((viewportHeight-portfolioTop) >= 75) {
        portfolio.classList.add("lineUp");
        portfolio.classList.remove('section-hidden');
      }

      if ((viewportHeight-portfolioTop) >= 75) {
        portfolio.classList.add("lineUp");
        portfolio.classList.remove('section-hidden');
      }

      if ((viewportHeight-truecommuteTop) >= 75) {
        truecommute.classList.add("lineUp");
        truecommute.classList.remove('section-hidden');
      }

      if ((viewportHeight-pollboxTop) >= 75) {
        pollbox.classList.add("lineUp");
        pollbox.classList.remove('section-hidden');
      }

      if ((viewportHeight-footprintTop) >= 75) {
        footprint.classList.add("lineUp");
        footprint.classList.remove('section-hidden');
      }

      if ((viewportHeight-flosserTop) >= 75) {
        flosser.classList.add("lineUp");
        flosser.classList.remove('section-hidden');
      }

      if ((viewportHeight-emulstirTop) >= 75) {
        emulstir.classList.add("lineUp");
        emulstir.classList.remove('section-hidden');
      }

      if ((viewportHeight-brushTop) >= 75) {
        brush.classList.add("lineUp");
        brush.classList.remove('section-hidden');
      }

      if ((viewportHeight-garliczoomTop) >= 75) {
        garliczoom.classList.add("lineUp");
        garliczoom.classList.remove('section-hidden');
      }

      if ((viewportHeight-mandolineTop) >= 75) {
        mandoline.classList.add("lineUp");
        mandoline.classList.remove('section-hidden');
      }

    };

    setTimeout(() => {
        const opener = document.getElementById('opener');
        opener.classList.add('lineUp');
        opener.classList.remove('section-hidden');
      }, 500)

    setTimeout(() => {
        scrollFun();
      }, 2000)


    window.addEventListener("scroll", scrollFun, true);

    return () => {
      window.removeEventListener("scroll", scrollFun, true);
    };
  }, []);

  return (
    <div className="container" id="container">
      {/* <Header /> */}
      <Body />
    </div>
  );
};

export default Container;
