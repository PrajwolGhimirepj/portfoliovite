import React, { useEffect, useRef } from "react";
import "./Page.css";
import Jump from "../../Jump/Jump";

const Page = ({ video, title, p1, p2, hover }) => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    if (textRef1.current) {
      if (hover) {
        textRef1.current.classList.add("small");
      } else {
        textRef1.current.classList.remove("small");
      }
    }
    if (textRef2.current) {
      if (hover) {
        textRef2.current.classList.add("small");
      } else {
        textRef2.current.classList.remove("small");
      }
    }
    if (textRef3.current) {
      if (hover) {
        textRef3.current.classList.add("small");
      } else {
        textRef3.current.classList.remove("small");
      }
    }
  }, [hover]);

  console.log("Hover in Page:", hover);

  return (
    <div className="align">
      <div className="video">
        <div className="videoContainer">
          <video
            rel="preload"
            autoPlay
            loop
            muted
            style={{ backgroundColor: "transparent" }}
            preload="auto"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="description">
        <div className="title">
          <p>{title}</p>
        </div>
        <div ref={textRef1} className="textContainer">
          <p>{p1}</p>
        </div>
        <div ref={textRef2} className="textContainer">
          <p>{p2}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
