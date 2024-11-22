import React from "react";
import "./Page.css";

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <div className="pagetop">
          <div className="pagetopleft font">
            <div className="whitespace"></div>
            <div className="tital">{props.tital}</div>
            <div className="sentence1">{props.Sentence1}</div>
            <div className="sentence1">{props.Sentence2}</div>
          </div>
          <div className="pagetopright">
            <div className="video">
              <video autoPlay loop muted src={props.scr}></video>
            </div>
          </div>
        </div>
        <div className="tital-p font"> Projects</div>
        <div className="pagebottom">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div> <div className="box"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
