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
    <div>
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
