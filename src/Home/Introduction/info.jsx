import React, { useRef } from "react";
import "./info.css";

const Info = () => {
  const textRef0 = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  const handleOver = (state) => {
    if (state === "HoverOn") {
      textRef.current.innerHTML = "More...";
      textRef2.current.innerHTML = "";
    } else if (state === "HoverOn1") {
      textRef.current.innerHTML =
        " This website showcases the skills I've developed and the projects I've undertaken so far.";
      textRef2.current.innerHTML = "More...";
    } else if (state === "HoverOn2") {
      textRef2.current.innerHTML =
        "Here, you'll find a selection of my work along with insights into my creative process, the tools I use, and the technologies I'm exploring.";
    }
  };

  const handelOff = (state) => {
    if (state === "HoverOff") {
      textRef.current.innerHTML = "  <span> Ghimire.</span>";
      textRef2.current.innerHTML = "More...";
    } else if (state === "Hover3") {
      textRef2.current.innerHTML = "More...";
    } else if (state === "HoverOff1") {
      textRef.current.innerHTML = "  <span> Ghimire.</span>";
    }
  };

  return (
    <>
      <div className="infocontainer">
        <div
          ref={textRef0}
          className="flex"
          onMouseOver={() => handleOver("HoverOn")}
          onMouseLeave={() => handelOff("HoverOff")}
        >
          <p>
            Hello! I'm <span>Prajwol Ghimire</span> , a 19-year-old aspiring
            front-end developer passionate about creating engaging,
            well-designed web applications.
          </p>
        </div>

        <div
          className="flex"
          onMouseOver={() => handleOver("HoverOn1")}
          onMouseLeave={() => handelOff("HoverOff1")}
        >
          <p ref={textRef} style={{ top: "-20px", position: "relative" }}>
            <span> Ghimire.</span>
          </p>
        </div>
        <div
          className="flex"
          onMouseOver={() => handleOver("HoverOn2")}
          onMouseLeave={() => handelOff("Hover3")}
        >
          <p ref={textRef2} style={{ top: "-40px", position: "relative" }}>
            More...
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
