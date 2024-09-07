import React from "react";
import "./Tools.css";
import Page from "./Pages/Page";
import Jump from "../Jump/Jump";

const Tools = ({ hover }) => {
  console.log(hover);
  return (
    <>
      {/* <div className="jump">
        <Jump />
      </div> */}
      <div className="about font">
        <div className="imgcon">
          <img src="Bg2.svg" alt="" />
        </div>
        <div className="rivecomp"></div>
        <div className="pages">
          <Page
            video={"React.mp4"}
            title={"React"}
            p1={
              "React is an open-source JavaScript library used for building user interfaces, particularly single-page applications where a seamless user experience ."
            }
            p2={
              "React allows developers to create reusable UI components that manage their own state, leading to more efficient and manageable code."
            }
            hover={hover}
          />
        </div>
        <div className="pages">
          <Page
            video={"Rive.mp4"}
            title={"Rive"}
            p1={
              "Rive is an animation software with very good web runtimes. It can be used to create interactive animations on web pages that react to user inputs. "
            }
            p2={
              "The Cat on the Home Page is a Rive component that follows the cursor. Below is another example. Here, on click, the cat jumps."
            }
            hover={hover}
          />
        </div>
        <div className="pages">
          <Page
            video={"illustrator.mp4"}
            title={"Illustrator"}
            p1={
              "Illustrator is widely used in graphic design, web design, and professional printing. Its integration with other Adobe Creative Cloud applications enhances workflow and creative possibilities."
            }
            p2={
              "Adobe Illustrator is a powerful vector graphics software used for creating illustrations, logos, and complex artwork."
            }
            hover={hover}
          />
        </div>
        <div className="pages">
          <Page
            video={"Chat.mp4"}
            title={"ChatGPT"}
            p1={
              "ChatGPT is a language model developed by OpenAI, widely used for various natural language processing tasks. ."
            }
            p2={
              "ChatGPT is used in applications ranging from chatbots to content creation, providing versatile solutions for text-based interactions."
            }
            hover={hover}
          />
        </div>
        <div className="pages">
          <Page
            video={"can.mp4"}
            title={"Blender"}
            p1={
              "Blender is a powerful open-source 3D creation suite used for modeling, animation, rendering, and more. It's widely popular in various industries, film production, and visual effects."
            }
            p2={
              "With its extensive features and active community, Blender is a go-to tool for artists and developers worldwide."
            }
            hover={hover}
          />
        </div>
        <div className="rivecomp"></div>
      </div>
    </>
  );
};

export default Tools;
