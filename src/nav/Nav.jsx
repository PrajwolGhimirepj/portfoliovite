import React from "react";

import "./nav.css";
import Card from "../Card/Card";
import CardE from "../Card(External)/CardE";
const Nav = () => {
  return (
    <>
      <div className="sidebar font">
        <Card
          scr={"/"}
          context={"Home"}
          img={"Icons/Home.png"}
          style={{ transitionDelay: "0.2s" }}
        />
        <Card
          scr={"tools"}
          context={"Tools"}
          img={"Icons/Rive.avif"}
          style={{ transitionDelay: "0.3s" }}
        />
        <Card
          scr={"projects"}
          context={"Projects"}
          img={"Icons/Projects.jpg"}
          style={{ transitionDelay: "0.3s" }}
        />
        <CardE
          style={{ transitionDelay: "0.4s" }}
          context={"GitHub"}
          img={"Icons/Git.jpg"}
          external={"https://github.com/PrajwolGhimirepj/portfoliovite"}
        />
        <CardE
          style={{ transitionDelay: "0.5s" }}
          context={"Instagram"}
          img={"Icons/Instagram.png"}
          external={"https://www.instagram.com/rahul567y5/"}
        />
      </div>
    </>
  );
};
export default Nav;
