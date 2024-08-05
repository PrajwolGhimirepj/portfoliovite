import React from "react";
import "./App.css";
import Nav from "./nav/Nav";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./Tools/Tools";
import { useState, useEffect } from "react";
import Jump from "./Jump/Jump";
const App = () => {
  const [hoverState, sethoverState] = useState(null);

  useEffect(() => {
    // console.log(hoverState);
  }, [hoverState]);

  return (
    <>
      <Router>
        <div className="container">
          <div
            className="nave "
            onMouseEnter={() => sethoverState(true)}
            onMouseLeave={() => sethoverState(false)}
          >
            <Nav />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools" element={<Tools hover={hoverState} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
