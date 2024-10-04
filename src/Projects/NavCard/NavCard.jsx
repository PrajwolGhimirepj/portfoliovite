import React from "react";
import "./NavCard.css";
import { Link } from "react-router-dom";

const NavCard = (props) => {
  return (
    <div className="navCard font">
      <img src={props.src} alt="" />
    </div>
  );
};
export default NavCard;
