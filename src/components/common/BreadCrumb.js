import { Link } from "gatsby"
import React from "react"

import {
  Image,
  BreadCrumbHeader,
  BreadCrumbInfo,
  BreadCrumbSubHeader,
} from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div
    //   className="
    // bg-red-500
    // sm:bg-blue-500
    // md:bg-green-500
    // lg:bg-yellow-500
    // xl:bg-violet-500
    // 2xl:bg-pink-200
    // 340Screen:bg-orange-400
    // 440Screen:bg-fuchsia-600
    // 540Screen:bg-blue-900"
    >
      <Image src={props.img} alt="BreadCrumb about images" />

      <BreadCrumbInfo>
        <BreadCrumbHeader>{props.title}</BreadCrumbHeader>
        <BreadCrumbSubHeader>
          <Link to="/">
            <p>Trendsoft Tech</p>
          </Link>

          <p>/</p>
          <p>{props.title}</p>
        </BreadCrumbSubHeader>
      </BreadCrumbInfo>
    </div>
  )
}

export default BreadCrumb
