import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="icon">
          <img src={props.src} alt="" />
        </div>
        <div className="text" style={{ transitionDelay: props.delay }}>
          <a id="herf" href={props.redirect} target="_blank" rel="noreferrer">
            {props.context}
          </a>
          <Link id="hmm" to={props.link}></Link>
        </div>
      </div>
    </>
  );
};
export default Card;
