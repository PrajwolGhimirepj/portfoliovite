import React from "react";
import "./Tools.css";
import Page from "./Pages/Page";

const Tools = ({ hover }) => {
  return (
    <>
      <div className="about font">
        <div className="imgcon">
          <img src="Bg2.svg" alt="" />
        </div>
        <div className="pages">
          <Page
            video={"React.mp4"}
            title={"React"}
            p1={
              "React is an open-source JavaScript library used for building user interfaces, particularly single-page applications where a seamless user experience is critical."
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
              "Rive is an animation software with very good web runtimes. It can be used to create interactive animations on web pages that react to user inputs."
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
              "ChatGPT is a language model developed by OpenAI, widely used for various natural language processing tasks. It can generate human-like text based on the input it receives."
            }
            p2={
              "ChatGPT is used in applications ranging from chatbots to content creation, providing versatile solutions for text-based interactions."
            }
            hover={hover}
          />
        </div>
      </div>
    </>
  );
};

export default Tools;
