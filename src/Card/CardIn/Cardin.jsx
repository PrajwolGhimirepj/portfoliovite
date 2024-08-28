import React from "react";
import "./Cardin.css";
import { Link } from "react-router-dom";

const Cardin = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="icon">
          <img src={props.src} alt="" />
        </div>
        <div className="text" style={{ transitionDelay: props.delay }}>
          <Link id="hmm" to={props.link}>
            {props.context}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cardin;
