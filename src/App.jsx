import React from "react";
import "./App.css";
import Nav from "./nav/Nav";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./Tools/Tools";
import { useState, useEffect } from "react";

import Projects from "./Projects/Projects";
const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <div className="nave ">
            <Nav />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/projects/*" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
