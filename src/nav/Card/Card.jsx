import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="cardContainer">
        <Link to={props.scr}>
          <div className="icon">
            <img src={props.img} alt="" />
          </div>
        </Link>

        <div className="text" style={props.style}>
          <Link to={props.scr}>{props.context} </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
