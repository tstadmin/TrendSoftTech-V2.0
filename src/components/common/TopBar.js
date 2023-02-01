import React from "react"
import "./TopBar.css"

const TopBar = props => {
  return (
    <div className=" example5 text-center bg-[#146aba] sticky top-0 z-30">
      <p className="text-white  font-Poppins">
        {props.title}

        <span className=" ml-4">{props.description}</span>
      </p>
    </div>
  )
}

export default TopBar
