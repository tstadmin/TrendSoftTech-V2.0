import { Link } from "gatsby"
import React from "react"

import { Image, BreadCrumInfo, BreadCrumbHeader } from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div >
      <Image src={props.img} alt="" />
      {/* <BreadCrumInfo>
        <BreadCrumbHeader>{props.title}</BreadCrumbHeader>
      </BreadCrumInfo> */}
      <div className="bg-[#146aba] p-1 ">
      <p className=" text-white space-x-3 2xl:ml-28 ml-8 1920Screen:ml-48 "><Link to="/" className="underline">Home</Link> <span> /</span>
      <span>{props.title}</span></p>
      </div>
    </div>
  )
}

export default BreadCrumb
