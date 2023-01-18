import React from "react"
import "./TopBar.css"

const TopBar = props => {
  return (
    <div className="movingText text-center bg-[#146aba] sticky top-0 z-30 py-2 w-full overflow-hidden break-normal">
      <p className="text-white font-Poppins w-full ">
        {props.title}

        <span className=" ml-4">{props.description}</span>
      </p>
    </div>
  )
}

export default TopBar
