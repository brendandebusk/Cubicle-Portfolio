// eslint-disable-next-line
import { useCallback } from "react";
import "./App.css";


// Sub-lead design engineer for the development of the Philips Sonicare Power Flosser. 
const Overlay = (props) => {
  const copy = [
    {
      flosser: {
        type: "product",
        title: "Philips Sonicare Power Flosser",
        text: "Sub-lead design engineer that supported development of the Sonicare Power Flosser, with focus on the base structure and handle.",
        date: "Launched 2020H2",
        url: "https://www.usa.philips.com/c-m-pe/power-flosser/power-flosser",
      },
    },
    {
      brush: {
        type: "product",
        title: "Philips Sonicare 9900 Prestige",
        text: "Lead design engineer for the Philips Sonicare Prestige charging travel case and charging base.",
        date: "Launched 2020H2",
        url: "https://www.usa.philips.com/c-m-pe/electric-toothbrushes/diamondclean-prestige-9900",
      },
    },
    {
      chefn: {
        type: "product",
        title: "Chef'n",
        text: "While at Chef'n, I was the lead design engineer for the entire line of products, managing the whole design process from concept through final manufacturing. During my time there I was involved in the development of nearly three dozen unique products.",
        url: "https://www.chefn.com",
        date: "Oct 2016 - April 2018",
      },
    },
    {
      truecommute: {
        type: "web",
        title: "TrueCommute",
        text: "// BACKGROUND //\n\nTrueCommute was developed out of my personal experience dealing with commuting long distances for work. For most of the jobs I’ve had in my career, I’ve had to deal with sizable driving commutes: Chicago ~3 hours roundtrip, Seattle ~2 hours roundtrip, and San Francisco ~2 hours roundtrip. Needless to say, I listened to a lot of podcasts..\n\nOne thing that was certain was that if the weather was less than ideal, my commute would always grow. This problem becomes even bigger when talking about longer drives: driving from San Francisco to Tahoe for the weekend, visiting the Wisconsin Dells from Chicago, going from Seattle to Crater Lake, etc. You get the idea. A bit of precipitation or otherwise can make an already long trip even longer, sometimes by a few hours.\n\nWhile the most popular routing services out there do a good job of in-the-moment route planning, accounting for live traffic conditions, they completely miss out on future conditions along your drive. TrueCommute fills the gap.\n\n// LOGIC //\n\nThe logic behind the app is relatively simple. The user puts in their origin, their destination, if they are wanting to do “leave at” or “arrive by” routing, and if they want to leave at/arrive by a set time today/tomorrow.\n\nWhy only today/tomorrow? I wanted the most accurate weather data and was concerned that allowing routing further out would result in poor routing estimates.\n\nRouting data is provided by Mapbox and is returned to the application as a JSON response. This response contains an estimated travel time based upon historical traffic data and current traffic data (if relevant) and a series of coordinates along the route, which the app sorts through and grabs coordinates every x number of miles. Based upon the time preferences set by the user, an estimate for what time the user will be at each coordinate is calculated. Using the coordinates and time estimates, forecasts are grabbed from weather.gov.\n\nFinally, a weighted score is calculated based upon the weather forecasts along the trip. The conditions that lead to a weighted score are presented to the user so they know when and where they will see poor weather. A number of research papers were referenced in developing this algorithm to understand weather impact upon commute times.",
        text2: "\n\n// DEVELOPMENT //\n\nThe app was developed using React. The hero animation started in vanilla Javascript and was converted to React. The rest of the app was initially developed using class components and was then converted over to functional components. This was done to enforce learning both paradigms.\n\nFrom the get-go I wanted the app to be fully responsive across devices, so depending upon if you’re on phone/tablet/desktop there will be a slightly different user experience.\n\n// VISUAL DESIGN //\n\nThe visual design was inspired by Medium’s current website, which I’m going to assume was inspired by newspaper typography in the 1900s (if someone knows, hit me up). I wanted a clean hero banner that had a bit of animation for visual interest. Given that the app is intended to aid drive planning, I thought it would be fun to create a subtle allusion to a car following a path.\n\n",
        url: "https://www.truecommute.app",
        git: "https://github.com/brendandebusk/True-Commute"
      },
    },
    {
      portfolio: {
        type: "web",
        title: "Portfolio",
        text: "This portfolio was custom built from scratch over the course of a week using React. I wanted to create a visual history of my work experience, spanning both web development and product design projects I've worked on through my career. Content presents itself as the user moves down the page, the goal being to incentivize scrolling to see what else there is.",
        git: "https://github.com/brendandebusk/Cubicle-Portfolio"
      },
    },
  ];

  let item = props.item;

  const obj = copy.filter((i) => i[item]);
  const title = obj[0][item].title;
  const body = obj[0][item].text;
  const body2 = obj[0][item].text2;
  const date = obj[0][item].date;
  const url = obj[0][item].url;
  const git = obj[0][item].git;
  const type = obj[0][item].type;

  return (
    <div className="overlay" onClick={(useCallback = () => props.reset())}>
      <div className="overlay-container">
        <div className="overlay-button-container" onClick={(useCallback = () => props.reset())}>
          +
        </div>
        <div className="overlay-title-container">
          <h2>{title}</h2>
          {date !== undefined ? <h3>{date}</h3> : null}
        </div>
        <div className="overlay-body-container">


        {type === "web" ? <div className="overlay-learn-more-container">
          {url !== undefined ? <div><a href={url} target="_blank" rel="noreferrer">Visit</a></div> : null}
          {git !== undefined ? <div><a href={git} target="_blank" rel="noreferrer">GitHub</a></div> : null}
          </div> : null }

          <h3>
          {body !== undefined ? body : null}
          {body2 !== undefined ? body2 : null}
          </h3>
          {type === "product" ?
          <div className="overlay-learn-more-container">
          {url !== undefined ? <div><a href={url} target="_blank" rel="noreferrer">Learn more</a></div> : null}</div>
          : null }
        </div>
      </div>
    </div>
  );
};

export default Overlay;


