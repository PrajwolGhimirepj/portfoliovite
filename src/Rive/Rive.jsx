import {
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import React from "react";
import { useState, useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import "./Rive.css";
const Cat = () => {
  const [mousepo, setMousepo] = useState({ x: 0, y: 0 });

  const stateMachines = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "Cat.riv",
    stateMachines: stateMachines,
    autoplay: true,
    // animations: "Right-Ear",
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.BottomLeft,
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

      Xpo.value = (event.clientX / width) * 200;
      Ypo.value = (event.clientY / height) * 100;
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [Xpo, Ypo]);

  return (
    <>
      <div className="rivecomponent">
        <RiveComponent />
      </div>
    </>
  );
};

export default Cat;
