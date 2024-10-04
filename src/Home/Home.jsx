import React, { useEffect } from "react";
import "./Home.css";
import RiveC from "../Rive/Rive";
import Info from "./Introduction/info";

const Home = () => {
  useEffect(() => {
    const videos = [
      "/Blender.mp4",
      "/can.mp4",
      "/Chat.mp4",
      "/illustrator.mp4",
      "/React.mp4",
      "/Rive.mp4",
    ];
    setTimeout(() => {
      videos.forEach((src) => {
        setTimeout(() => {
          const videoElement = document.createElement("video");
          videoElement.src = src;
          videoElement.preload = "auto"; // Preload each video
          console.log(src);
        }, 700);
      });

      console.log("initial load ");
    }, 1000);
  }, []);

  return (
    <>
      <div className="home">
        <img src="BackGround Images\HomeBackground.svg" alt="" />
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
