import CV from "../assets/ALAMGIR KHAN.pdf"

function navbar() {
    return (
        <>
            <div  id="Home" className="w-full bg-purple-600">

                {/* nav title top */}
                <div className="upper flex justify-between py-4 
                    sm:w-full px-5
                    md:w-11/12 mx-auto
                    lg:w-4/5">
                    <div className="logo">
                        <div className="alamgir text-blue-400 font-bold text-xl mb-0
                        lg:text-4xl">ALAMGIR</div>
                        <div className="KHAN font-bold text-xl -mt-2 lg:text-3xl">KHAN</div>
                    </div>
                    <a href={CV} download="ALAMGUR KHAN"><button className="bg-blue-400 rounded-full px-3 text-sm h-10 mt-1 lg:text-2xl active:bg-blue-500
                        md:mt-5">Download Resume</button></a>
                </div>
                
            </div>

        </>


    )
}

export default navbar
