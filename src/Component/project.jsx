import pro1 from "../Pics/pro 1 portfolio.png"
import pro2 from "../Pics/pro 2 ui.jpeg"
import pro3 from "../Pics/pro 3 art.jpeg"

const project = () => {
  return (
    <div id="Project" className="hright mt-32 w-3/4 mx-auto">
      <div className="main inner flex flex-col        md:flex-row md:gap-10">

        {/* text */}
        <div className="text          md:w-2/3 mt-auto">
          <h1 className="text-3xl text-blue-400">MY LATEST WORK</h1>
          <p className="text-justify mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button className="bg-blue-400 p-2 mx-12 rounded-full hover:bg-blue-500 mt-6    md:mx-0">View all project</button>
        </div>

        {/* project box */}
        <div className="ptoject h-40 mt-10 border-blue-300 border-2 rounded-2xl     md:mt-0 md:w-1/2 md:h-52">
          <img className="h-full w-full rounded-2xl" src={pro1} alt="" />
        </div>
      </div>

      <div className="Down box flex flex-col mt-10        md:flex-row md:gap-28     lg:gap-40">
      <div className="ptoject h-40 border-blue-300 border-2 rounded-2xl     md:w-1/2 md:h-52">
      <img className="h-full w-full rounded-2xl" src={pro2} alt="" />
      </div>
        <div className="ptoject h-40 mt-10 border-blue-300 border-2 rounded-2xl    md:mt-0 md:w-1/2 md:h-52">
        <img className="h-full w-full rounded-2xl" src={pro3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default project
