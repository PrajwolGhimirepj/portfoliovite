import React, { useEffect } from "react";
import "./ProjectPage.css";
import { useRef } from "react";
import NavCard from "../NavCard/NavCard";

const ProjectPage = (props) => {
  const textref = useRef();
  const textref2 = useRef();

  const addclass = () => {
    textref.current.classList.add("in");
    textref2.current.classList.add("in");
    console.log("clicked");
  };
  useEffect(() => {
    addclass();
  }, []);
  return (
    <>
      <div className="projectpagecontainer">
        <div className="poject-dec-img">
          <div className="description-p">
            <div className="tital-t font fade-d  ">
              <h1>Tech Stack</h1>
            </div>
            <div className="tital-p font fade-p   ">
              <h1>{props.context}</h1>
            </div>
            <div className="text-container">
              <div ref={textref} className="text-pr font in ">
                {props.paragraph1}
              </div>
              <div ref={textref2} className="text-pr font in">
                {props.paragraph2}
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="image-container-p slide">
              <img src={props.scr} alt="" />
            </div>
          </div>
        </div>
        <div className="navigation-stack">
          <div className="techstack-c">
            <div className="techstack fade-d">
              <NavCard src={"../techstack/React-icon.svg"} />
              <NavCard src={"../Icons/Rive.avif"} />
              <NavCard src={"../techstack/illustrator.svg"} />
            </div>
          </div>
          <div className="unknown">
            <div className="visit font fade-p"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
