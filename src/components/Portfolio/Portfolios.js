import React from "react"
import "../Portfolio/portfolio.css"

const Portfolios = props => {
  return (
    <div>
      <h1 className="text-center md:text-5xl text-2xl my-12 font-mono font-bold">
        Our Projects
      </h1>
      {props.portfolio.map((i, idx) => (
        <div className="text-4xl md:text-7xl ml-16 group 540Screen:flex grid justify-start 540Screen:space-x-[50%] space-y-20">
          <h1 className="myDIV duration-500 hover:cursor-pointer hover:text-white hover:bg-black font-mono mb-6 ">
            {i.listItem.title}
          </h1>
          <img
            className="hide 540Screen:w-[30%] w-[40%] 540Screen:h-[40%] object-top object-cover rounded-3xl border-8 border-black absolute z-10 top-auto"
            src={i.listItem.img}
            alt="img"
          />
        </div>
      ))}
    </div>
  )
}

export default Portfolios
