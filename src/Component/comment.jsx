import React from 'react'

const comment = () => {
  return (
    <div id='Comment' className='Section'>
    <div className="hight w-3/4 mx-auto mt-32  pb-16">
      <div className='flex flex-col text-justify     md:flex-row md:justify-between'>
        <div className="text-3xl text-blue-400 font-extrabold">
          <h1 className="md:hidden text-2xl">Let's work together !</h1>
          <h1 className="hidden md:block">Lets's work</h1>
          <h1 className="hidden md:block">together !</h1>
        </div>

        {/* box */}
        <div className="box w-4/5 mx-auto mt-5 flex-none items-center mb-12 border-b-blue-400 border-2 rounded-2xl p-3   md:mt-0 md:w-1/2">
          <input type="text" placeholder="Your Name" className="bg-transparent w-full border-0 "/>
          <hr />
          <input type="email" placeholder="Your Email" className="bg-transparent w-full mt-5 border-0"/>
          <hr />
          <textarea name="comment" placeholder='Enter your comment here' id="" cols="auto" rows="auto" className='bg-transparent w-full mt-5 border-0'></textarea>
          <hr />
          <button className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 mt-6">Send your message</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default comment
