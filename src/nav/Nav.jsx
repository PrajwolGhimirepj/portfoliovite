import React from "react";
import Card from "../Card/Card";
import Profile from "./Profile/Profile";
import "./nav.css";
import Cardin from "../Card/CardIn/Cardin";
const Nav = () => {
  const svgStyle = {
    fill: "magenta",
  };
  return (
    <>
      <div className="sidebar font">
        <Profile />
        <div>
          <Cardin src={"home.png"} context={"Home"} delay={"0.2s"} link={"/"} />

          <Cardin
            src={"rive.avif"}
            context={"Tools"}
            delay={"0.3s"}
            link={"/tools"}
          />
          <Card
            src={"git.jpg"}
            context={"GitHub"}
            delay={"0.4s"}
            link={"/about"}
            sttyle={svgStyle}
            redirect={"https://github.com/PrajwolGhimirepj/"}
          />
          <Card
            src={"insta.png"}
            context={"Instagram"}
            delay={"0.5s"}
            redirect={"https://www.instagram.com/rahul567y5/"}
          />
        </div>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
export default Nav;
