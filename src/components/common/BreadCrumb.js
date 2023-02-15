import { Link } from "gatsby"
import React from "react"

import { Image, BreadCrumInfo, BreadCrumbHeader } from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div >
     
      <img src={props.img} alt=""  className=" w-[100%]"/>
   
      <div className="bg-[#146aba] p-1 ">
      <div className=" text-white space-x-3 2xl:ml-28 ml-8 1920Screen:ml-48 flex">
        <Link to="/" className="underline">Home</Link> <p className=" text-white"> /</p>
      <p className=" text-white" aria-current="page">{props.title}</p></div>
      </div>
    </div>
  )
}

export default BreadCrumb
