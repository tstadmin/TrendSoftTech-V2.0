import React from "react"

import Tilt from "react-parallax-tilt"

const WorkingProcess = props => {
  return (
    <div className="lg:flex justify-center gap-4 340Screen:px-8 ">
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start  space-y-12 p-12 mt-16 rounded-md border-blue-400 "
      >
        <h1 className="text-xl font-medium">WORKING PROCESS</h1>

        <h1 className="440Screen:text-4xl text-2xl font-semibold lg:text-4xl ">
          Our Working Process - How We Work For Our Customers
        </h1>

        <h1 className="text-xl text-center bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 lg:w-[50%] sm:w-full hover:duration-700 cursor-pointer">
          Contact us
        </h1>
      </Tilt>

      <div className="mt-16 md:grid md:grid-cols-2 gap-4 w-full lg:w-[60%] md:w-full ">
        {props.workingProcess.map((i, idx) => (
          <div
            key={i.listItem.id}
            className="border border-blue-400 min-h-full p-8 rounded-md space-y-4 shadow-sm shadow-blue-400 hover:bg-black/5  hover:border-none hover:duration-[2s]"
          >
            <h1 className="text-5xl text-blue-600 font-semibold">
              {i.listItem.id}
            </h1>

            <h1 className="lg:text-3xl  md:text-xl  font-semibold">
              {i.listItem.title}
            </h1>

            <h1 className="text-lg">{i.listItem.description}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkingProcess
