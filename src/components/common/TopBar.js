import React from "react"
import "./TopBar.css"

const TopBar = props => {
  return (
    <div className=" text-center bg-[#146aba] sticky top-0 p-2 z-30">
      {/* <p className="text-white  font-Poppins"> */}
      <p className="text-white sm:text-[16px] text-[12px]">
        {/* {props.title} */}
        {/* Wishing you a very happy Ambedkar Jayanti 2023! */}
        Welcome to Trendsoft Technologies
        {/* <span className=" ml-4">{props.subTitle}</span>  */}
      </p>
    </div>
  )
}

export default TopBar
