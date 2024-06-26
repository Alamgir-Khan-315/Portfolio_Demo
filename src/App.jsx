import React from "react"
import Navbar from "./Component/navbar.jsx"
import Navbottom from "./Component/navBottom.jsx"
import Home from "./Component/home.jsx"
import About_me from "./Component/about me.jsx"
import Skill from "./Component/skills.jsx"
import Project from "./Component/project.jsx"
import Comment from "./Component/comment.jsx"


export default function App() {
  return (
    <>
      <div className="main h-auto bg-purple-800 font-mono text-white">

        <Navbar />
        <Navbottom />
        <Home />
        <About_me />
        <Skill />
        <Project />
        <Comment />

      </div>

    </>
  )
}
