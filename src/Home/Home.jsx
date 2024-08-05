import React from "react";
import "./Home.css";
import Rive from "../Rive/Rive";
import Info from "../IntroCard/info";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="introcard">
          <Info />
        </div>
        <div className="cat">
          <Rive />
        </div>
      </div>
    </>
  );
};
export default Home;
