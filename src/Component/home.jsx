import homePic from "../Pics/ak.png" 
function home() {
    return (
        <>
            <div >
                <div className="container flex justify-around mx-auto
                sm:w-full sm:mt-20
                md:w-3/4 md:flex-row
                lg:w-3/4 lg:flex-row">

                    {/* txt */}
                    <div className="text w-3/4 mx-auto my-20     md:w-1/2 lg:w-2/5">
                        <h1 className="text-4xl font-extrabold">ALAMGIR KHAN</h1>
                        <h3 className="text-2xl font-bold">I AM A <span className="text-blue-400">DEVELOPER</span></h3>

                        <p className="text-justify text-sm pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit repellat sunt quae, officia amet porro ducimus.</p>
                        <Link to="Comment" smooth={true} spy={true} ><button className="bg-blue-400 p-2 rounded-full mt-5 active:bg-blue-500" >Contact me</button></Link>
                        <Link to="Project" smooth={true} spy={true} ><button className="border-blue-400 border-2 p-2 rounded-full m-5
                        hover:bg-blue-400">My Portfolio</button></Link>
                    </div>

                    {/* pic */}
                    <div className="pic hidden h-80     my-auto md:w-1/3 md:ml-362 md:block lg:w-2/5 lg:-mr-32">
                        <img className="h-full rounded-lg" src={homePic} alt="Pic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default home
