import React from "react";
import "./Tools.css";
import Page from "./Pages/Page";
import Batcat from "../Rive/Batcat/Batcat";

const Tools = () => {
  return (
    <div className="container-tools">
      <div className="bounce"></div>
      <div className="batcat"></div>
      <div className="bg">{/* <Batcat /> */}</div>

      <div className="page">
        <Page
          scr={"../Video/React.mp4"}
          tital={"React"}
          Sentence1={
            "React is an open-source JavaScript library used for building user interfaces, particularly single-page applications where a seamless user experience ."
          }
          Sentence2={
            "React allows developers to create reusable UI components that manage their own state, leading to more efficient and manageable code."
          }
        />
      </div>
      <div className="page">
        <Page
          scr={"../Video/illustrator.mp4"}
          tital={"Illustrator"}
          Sentence1={
            "Illustrator is widely used in graphic design, web design, and professional printing. Its integration with other Adobe Creative Cloud applications enhances workflow and creative possibilities."
          }
          Sentence2={
            "Adobe Illustrator is a powerful vector graphics software used for creating illustrations, logos, and complex artwork."
          }
        />
      </div>
      <div className="page">
        <Page
          scr={"../Video/Rive.mp4"}
          tital={"Rive"}
          Sentence1={
            "Rive is an animation software with very good web runtimes. It can be used to create interactive animations on web pages that react to user inputs.."
          }
          Sentence2={
            "The Cat on the Home Page is a Rive component that follows the cursor. Below is another example. Here, on click, the cat jumps."
          }
        />
      </div>
      <div className="page">
        <Page
          scr={"../Video/Blender.mp4"}
          tital={"Blender"}
          Sentence1={
            "Blender is a powerful open-source 3D creation suite used for modeling, animation, rendering, and more. It's widely popular in various industries, film production, and visual effects."
          }
          Sentence2={
            "With its extensive features and active community, Blender is a go-to tool for artists and developers worldwide."
          }
        />
      </div>
      <div className="page">
        <Page
          scr={"../Video/Chat.mp4"}
          tital={"ChatGPT"}
          Sentence1={
            "ChatGPT is a language model developed by OpenAI, widely used for various natural language processing tasks."
          }
          Sentence2={
            "ChatGPT is used in applications ranging from chatbots to content creation, providing versatile solutions for text-based interactions."
          }
        />
      </div>
      <div className="bounce"></div>
    </div>
  );
};

export default Tools;
