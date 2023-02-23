import React from "react"
import "./TopBar.css"

const TopBar = props => {
  return (
    <div className=" example5 text-center bg-[#146aba] sticky top-0 z-30">
      <p className="text-white  font-Poppins">
        {/* {props.title} */}
        Wishing you a very Happy holi 2023!
        {/* <span className=" ml-4">{props.subTitle}</span>  */}
      </p>
    </div>
  )
}

export default TopBar
