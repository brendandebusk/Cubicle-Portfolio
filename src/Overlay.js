// eslint-disable-next-line
import { useCallback } from "react";
import "./App.css";


// Sub-lead design engineer for the development of the Philips Sonicare Power Flosser. 
const Overlay = (props) => {
  const copy = [
    {
      flosser: {
        title: "Philips Sonicare Power Flosser",
        text: "Sub-lead design engineer that supported development of the Sonicare Power Flosser, with focus on the base structure and handle.",
        date: "Launched 2020H2",
        url: "https://www.usa.philips.com/c-m-pe/power-flosser/power-flosser",
      },
    },
    {
      brush: {
        title: "Philips Sonicare 9900 Prestige",
        text: "Lead design engineer for the Philips Sonicare Prestige charging travel case and charging base.",
        date: "Launched 2020H2",
        url: "https://www.usa.philips.com/c-m-pe/electric-toothbrushes/diamondclean-prestige-9900",
      },
    },
    {
      chefn: {
        title: "Chef'n",
        text: "While at Chef'n, I was the lead design engineer for the entire line of products, managing the whole design process from concept through final manufacturing. During my time there I was involved in the development of nearly three dozen unique products.",
        url: "https://www.chefn.com",
        date: "Oct 2016 - April 2018",
      },
    },
  ];

  let item = props.item;

  const obj = copy.filter((i) => i[item]);
  const title = obj[0][item].title;
  const body = obj[0][item].text;
  const date = obj[0][item].date;
  const url = obj[0][item].url ? obj[0][item].url : 'na'

  return (
    <div className="overlay" onClick={(useCallback = () => props.reset())}>
      <div className="overlay-container">
        <div className="overlay-button-container" onClick={(useCallback = () => props.reset())}>
          +
        </div>
        <div className="overlay-title-container">
          <h2>{title}</h2>
          <h3>{date}</h3>
        </div>
        <div className="overlay-body-container">
          <h3>{body}</h3>
          {url !== "na" ? <div><a href={url} target="_blank" rel="noreferrer">Learn more</a></div> : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
