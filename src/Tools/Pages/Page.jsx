import React from "react";
import "./Page.css";

const Page = (props) => {
  return (
    <div className="page-c">
      <div className="left">
        <div className="video">
          <video src={props.scr} autoPlay loop muted preload="auto"></video>
        </div>
      </div>
      <div className="right">
        <div className="description">
          <div className="tital font">{props.tital}</div>
          <div className="text-p font">{props.Sentence1}</div>
          <div className="text-p font">{props.Sentence2}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
