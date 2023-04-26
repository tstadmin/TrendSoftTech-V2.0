import React from "react"

import { Heading, Div, AboutUsInfo } from "./AboutStyle"
const AboutUs = props => {
  return (
    <Div>
      <img
        src={props.data.aboutimg}
        alt=""
        className="lg:w-[450px] w-[600px]"
      />
      <AboutUsInfo>
        <h1 className="text-[#B8000C]  md:text-lg  text-sm font-semibold">
          {props.data.aboutUs}
        </h1>

        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{
            __html: props.data.aboutUsDescription,
          }}
        />
      </AboutUsInfo>
    </Div>
  )
}

export default AboutUs
