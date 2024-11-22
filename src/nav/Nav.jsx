import React from "react";
import "./nav.css";
import Card from "./Card/Card";

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
          img={"Icons/Projects.jpg"}
          style={{ transitionDelay: "0.3s" }}
        />
        {/* <Card
          scr={"test"}
          context={"Projects"}
          img={""}
          style={{ transitionDelay: "0.3s" }}
        /> */}
      </div>
    </>
  );
};
export default Nav;
