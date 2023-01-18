import React from "react"
import "./TopBar.css"

const TopBar = props => {
  return (
    <div className="movingText text-center bg-[#146aba] sticky top-0 z-30 py-2 ">
      <p className="text-white font-Poppins">
        {props.title}

        <span className=" ml-4">{props.description}</span>
      </p>
    </div>
  )
}

export default TopBar
