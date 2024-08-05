import React from "react";
import "./Home.css";
import RiveC from "../Rive/Rive";
import Info from "../IntroCard/info";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="introcard">
          <Info />
        </div>
        <div className="cat">
          <RiveC />
        </div>
      </div>
    </>
  );
};
export default Home;
