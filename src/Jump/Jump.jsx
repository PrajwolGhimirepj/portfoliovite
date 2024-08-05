import {
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import React from "react";
import { useState, useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import "./jump.css";

const RiveC = () => {
  const [mousepo, setMousepo] = useState({ x: 0, y: 0 });
  console.log(mousepo);

  const stateMachines = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "wh.riv",
    stateMachines: stateMachines,
    autoplay: true,
    animations: "Right-Ear",
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.TopLeft,
    }),
  });

  const Xpo = useStateMachineInput(rive, stateMachines, "X");
  const Ypo = useStateMachineInput(rive, stateMachines, "Y");

  useEffect(() => {
    const handleMouse = (event) => {
      setMousepo({
        x: event.clientX,
        y: event.clientY,
      });

      const height = window.innerHeight;
      const width = window.innerWidth;

      Xpo.value = (event.clientX / width) * 60;
      Ypo.value = (event.clientY / height) * 60;
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [Xpo, Ypo]);

  return (
    <>
      <div className="rivecomponent2">
        <RiveComponent />
      </div>
    </>
  );
};

export default RiveC;
