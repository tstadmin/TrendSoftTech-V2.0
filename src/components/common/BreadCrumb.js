import { Link } from "gatsby"
import React from "react"

import {
  Image,
  BreadCrumb_Header,
  BreadCrumb_Info,
  BreadCrumb_SubHeader,
} from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div>
      <div>
        <Image src={props.img} alt="BreadCrumb about images" />

        <BreadCrumb_Info>
          <BreadCrumb_Header>{props.title}</BreadCrumb_Header>
          <BreadCrumb_SubHeader>
            <Link to="/">
              {" "}
              <h1>Trendsoft Tech</h1>
            </Link>

            <h1>/</h1>
            <h1>{props.title}</h1>
          </BreadCrumb_SubHeader>
        </BreadCrumb_Info>
      </div>
    </div>
  )
}

export default BreadCrumb
