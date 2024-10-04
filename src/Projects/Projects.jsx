// Projects.js
import React from "react";
import "./Projects.css";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";
import NavCard from "./NavCard/NavCard";

const Projects = () => {
  const location = useLocation();
  const isHomePath =
    location.pathname === "/projects" || location.pathname === "/projects/";

  return (
    <>
      <div className="projects-p">
        <div className="image-bg fade-p">
          <img src="../BackGround Images/HomeBackground.svg" alt="" />
        </div>
        <Routes>
          <Route
            index
            element={
              <ProjectPage
                link={"https://todoooapppp.netlify.app/"}
                key="project1"
                context={"TO-DO-LIST"}
                paragraph1={
                  " A simple app made in React. Where you can add tasks,delete tasks and mark favourite tasks. This project took me about A week to make.  "
                }
                paragraph2={
                  "For this project i used illustrator for the design,Rive for animation and React."
                }
                scr="../Images/TO-DO-LIST.png"
              />
            }
          />
          <Route
            path="project1"
            element={
              <ProjectPage
                link={"https://flowers-fullscreen.netlify.app/"}
                key="project2"
                context={"FLOWER "}
                paragraph1={
                  "An animation i made useing Rive.Illustraction was used to create the elements used.Rives runtime is used to implement animations in the projects. "
                }
                paragraph2={"I made this to explore Rive and its features."}
                scr="../Images/Flower.png"
              />
            }
          />
          <Route
            path="project2"
            element={
              <ProjectPage
                key="project3"
                link={"https://flowers-fullscreen.netlify.app/"}
                key="project7"
                context={"Portfolio "}
                paragraph1={
                  "Pesonal Portfolio that shows my skills and projects.The things i have learnt so far and my skill level.  "
                }
                paragraph2={
                  "Here i have used black and white them with very minimal style and layout."
                }
                scr="../Images/Portfolio.png"
              />
            }
          />
        </Routes>
        <div className="project-nav">
          <Link to="/projects">
            {" "}
            <NavCard src="../Icons/Home.png" />
          </Link>
          <Link to="/projects/project1">
            <NavCard src="../Icons/Projects.jpg" />
          </Link>
          <Link to="/projects/project2">
            <NavCard src="../Icons/Rive.avif" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
