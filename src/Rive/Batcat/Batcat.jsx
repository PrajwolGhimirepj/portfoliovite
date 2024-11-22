import {
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import React, { useEffect, useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import "./Batcat.css";

const Batcat = () => {
  const [State, setState] = useState(true);

  const stateMachines = "State";

  const { rive, RiveComponent } = useRive({
    src: "Batcat.riv",
    stateMachines: stateMachines,
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.BottomLeft,
    }),
  });

  // Debounce function to limit the rate at which `handleWheel` is called
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleWheel = debounce(() => {
    setState(false);
    console.log("Wheel event detected - State set to:", State);
  }, 200);

  useEffect(() => {
    console.log("Mounted");
    setState(true);

    // Add the wheel event listener on mount
    window.addEventListener("wheel", handleWheel);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const jump = useStateMachineInput(rive, stateMachines, "jump");

  useEffect(() => {
    // Only try to set jump.value if jump and rive are initialized
    if (rive && jump) {
      if (State === false) {
        jump.value = false;
      }

      setTimeout(() => {
        jump.value = true;
        setState(false);
      }, 100);
    }
  }, [State, rive, jump]);

  return (
    <div className="rivecomponentBatcat">
      <RiveComponent />
    </div>
  );
};

export default Batcat;
