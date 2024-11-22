import React from "react";
import "./App.css";
import Nav from "./nav/Nav";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./Tools/Tools";
import Test from "./Test/Test";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <div className="topnav font">
            <h4>Login</h4>
            <h4>Blog</h4>
          </div>
          <div className="nav ">
            <Nav />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
