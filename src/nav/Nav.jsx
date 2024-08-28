import React from "react";
import Profile from "./Profile/Profile";
import "./nav.css";
import Card from "../Card/Card";
import CardE from "../Card(External)/CardE";
const Nav = () => {
  return (
    <>
      <div className="sidebar font">
        <Profile />
        <Card
          scr={"/"}
          context={"Home"}
          img={"home.png"}
          style={{ transitionDelay: "0.2s" }}
        />
        <Card
          scr={"tools"}
          context={"Tools"}
          img={"rive.avif"}
          style={{ transitionDelay: "0.3s" }}
        />
        <CardE
          style={{ transitionDelay: "0.4s" }}
          context={"GitHub"}
          img={"git.jpg"}
          external={"https://github.com/PrajwolGhimirepj/portfoliovite"}
        />
        <CardE
          style={{ transitionDelay: "0.5s" }}
          context={"Instagram"}
          img={"insta.png"}
          external={"https://www.instagram.com/rahul567y5/"}
        />
        <div className="profileContainer"></div>
      </div>
    </>
  );
};
export default Nav;
