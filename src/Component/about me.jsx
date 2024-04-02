import Contact_me_pic from "../Pics/Contact me.png"
import { Link} from "react-scroll";

function about_me() {
    return (
        <div id="About_me">

            <div className="About_me flex flex-col my-10 w-3/4 mx-auto       md:flex md:flex-row md:justify-between lg:flex lg:text-2xl">

                {/* pic */}
                <div className="pic h-1 md:w-1/3 md:h-full">
                    <img className="md:h-1/2" src={Contact_me_pic} alt="" />
                </div>

                {/* text */}
                <div className="text md:w-full mx-auto my-auto       md:pl-60 lg:pl-96">
                    <h1 className="text-blue-400 font-extrabold text-3xl lg:text-5xl">ABOUT ME</h1>
                    <h1 className=" mt-3 font-extrabold text-2xl text-justify">I'm a Freelance Front-end Developer with over 2 years of experience</h1>
                    <p className="text-sm my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a modi voluptatem dolorem assumenda?
                        Doloremque nulla, accusamus deleniti voluptates, consequatur sit labore excepturi suscipit quo deserunt
                        eveniet eligendi reiciendis sed.</p>

                    {/* detail card */}
                    <div className="number flex flex-row justify-around my-5 text-center">
                        <div className="year">
                            <h1 className="text-blue-400 text-3xl">2</h1>
                            <p>Years of Experience</p>
                            <Link to="Comment" smooth={true} spy={true} ><button className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 mt-6">Contact me</button></Link>
                        </div>
                        <div className="project">
                            <h1 className="text-blue-400 text-3xl">500+</h1>
                            <p>Project Completed</p>
                            <Link to="Project" smooth={true} spy={true} ><button className="border-blue-400 border-2 p-2 rounded-full  mt-6
                                             hover:bg-blue-400">My Portfolio</button></Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default about_me
