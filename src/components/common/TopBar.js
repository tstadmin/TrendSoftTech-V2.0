import React from "react"
import "./TopBar.css"

const TopBar = props => {
  return (
    <div className=" text-center bg-[#146aba] sticky top-0 p-2 z-30">
      {/* <p className="text-white  font-Poppins"> */}
      <p className="text-white">
        {/* {props.title} */}
        Wishing you a very happy Easter 2023!
        {/* <span className=" ml-4">{props.subTitle}</span>  */}
      </p>
    </div>
  )
}

export default TopBar
