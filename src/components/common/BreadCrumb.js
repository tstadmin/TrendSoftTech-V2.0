import { Link } from "gatsby"
import React from "react"

import { Image, BreadCrumInfo, BreadCrumbHeader } from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div className="relative">
      <Image src={props.img} alt="" />
      <BreadCrumInfo>
        <BreadCrumbHeader>{props.title}</BreadCrumbHeader>
      </BreadCrumInfo>
    </div>
  )
}

export default BreadCrumb
