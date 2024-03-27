import React from 'react'
import { FaHome, FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { Link} from "react-scroll";

function Navbottom() {
  return (
    <div className='w-full fixed bottom-5        md:bottom-5 '>
      <div className="nav_bottom w-2/3 bg-purple-600 mx-auto cursor-pointer
      flex justify-between py-2 px-10 text-2xl rounded-full list-none shadow-lg
      md:w-1/3 lg:w-1/3">
        <li>
          <Link to="Home" activeClass='active' smooth={true} spy={true} ><FaHome /></Link>
        </li>
        <li>
          <Link to="About_me" activeClass='active' smooth={true} spy={true} ><FaUserAlt /></Link>
        </li>
        <li>
          <Link to="Skills" activeClass='active' smooth={true} spy={true} ><GiSkills /></Link></li>
        <li>
          <Link to="Project" activeClass='active' smooth={true} spy={true} ><AiFillProject /></Link></li>
        <li>
          <Link to="Comment"activeClass='active' smooth={true} spy={true}  ><RiContactsFill /></Link></li>
          
      </div>
    </div>
  )
}

export default Navbottom
