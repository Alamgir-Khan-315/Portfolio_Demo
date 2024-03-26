import laptop from "../Pics/laptop icon.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

const skills = () => {
  return (
    <div id="Skills" className="Height mt-32      md:flex md:w-11/12 lg:flex">
      <div className="main flex flex-col my-10 w-3/4 mx-auto
            md:w-1/2">
        <div className="text text-center my-auto">
          <h1 className='text-blue-400 font-extrabold text-3xl'>WHAT I DO</h1>
        </div>
        <div className="img w-1/2 mx-auto mt-12">
          <img src={laptop} alt="" />
        </div>
      </div>

      {/* section 2 */}
      <div className="box2 w-3/4 mx-auto  md:w-1/2">
        {/* 1 */}
        <div className="skills flex justify-around mt-5">
          <div className="skill text w-3/4">
            <h1 className="font-extrabold size-3xl">UI/UX Desgin</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr className="mt-4" />
          </div>
          <div className="skill icon my-auto text-2xl hover:text-blue-400">
            <FaArrowAltCircleRight />
          </div>
        </div>

        {/* 2 */}
        <div className="skills flex justify-around mt-5">
          <div className="skill text w-3/4">
            <h1 className="font-extrabold size-3xl">Graphics</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr className="mt-4" />
          </div>
          <div className="skill icon my-auto text-2xl hover:text-blue-400">
            <FaArrowAltCircleRight />
          </div>
        </div>

        {/* 3 */}
        <div className="skills flex justify-around mt-5">
          <div className="skill text w-3/4">
            <h1 className="font-extrabold size-3xl">Illustrator</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr className="mt-4" />
          </div>
          <div className="skill icon my-auto text-2xl hover:text-blue-400">
            <FaArrowAltCircleRight />
          </div>
        </div>

        {/* 4 */}
        <div className="skills flex justify-around mt-5">
          <div className="skill text w-3/4">
            <h1 className="font-extrabold size-3xl">UI/UX Desgin</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr className="mt-4" />
          </div>
          <div className="skill icon my-auto text-2xl hover:text-blue-400">
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default skills
