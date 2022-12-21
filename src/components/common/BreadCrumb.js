import { Link } from "gatsby"
import React from "react"
// import tw from "twin.macro"
import {
  Image,
  BreadCrumb_Header,
  BreadCrumb_Info,
  BreadCrumb_SubHeader,
} from "./CommonStyle"

const BreadCrumb = props => {
  // const Header = tw.h1`lg:text-[52px]  sm:text-[32px] text-[20px] font-semibold`
  // const Subheader = tw.div`flex  w-full  justify-center space-x-6 lg:text-[20px]  text-[16px]  font-semibold`
  // const Info = tw.div`absolute xl:top-[35%] lg:top-[25%] md:top-[20%] sm:top-[20%] top-[14%] w-full  text-center md:space-y-3 space-y-2`
  //const Images = tw.img`relative w-[100vw] h-[60vh] `
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
