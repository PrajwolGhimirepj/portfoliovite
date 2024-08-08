import React from "react";

const CardE = (props) => {
  return (
    <>
      <div className="cardContainer">
        <a href={props.external} target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <img src={props.img} alt="" />
          </div>
        </a>

        <div className="text" style={props.style}>
          <a href={props.external} target="_blank" rel="noopener noreferrer">
            {props.context}
          </a>
        </div>
      </div>
    </>
  );
};
export default CardE;
