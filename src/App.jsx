import React from "react"
import Navbar from "./Component/navbar.jsx"
import Navbottom from "./Component/navBottom.jsx"
import Home from "./Component/home.jsx"
import About_me from "./Component/about me.jsx"
import Skill from "./Component/skills.jsx"
import Project from "./Component/project.jsx"
import Comment from "./Component/comment.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <Router>
        <div className="main h-auto bg-purple-800 font-mono text-white">

          <Navbar />
          <Navbottom />
          <Home/>
          <About_me/>
          <Skill/>
          <Project/>
          <Comment/>
          
          {/* <div id="/"><Home/></div>
          <div id="Project"><Project/></div>
          <div id="About_me"><About_me/></div>
          <div id="Skill"><Skill/></div>
          <div id="Comment"><Comment/></div> */}
        


          {/* <Routes>
            <Route><Home /></Route>
            <Route><About_me /></Route>
          </Routes> */}

        </div>

      </Router>
    </>
  )
}