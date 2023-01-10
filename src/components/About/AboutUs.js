import React from "react"

import { Heading, Div, AboutUsInfo } from "./AboutStyle"
const AboutUs = props => {
  return (
    <Div>
      <img src={props.data.aboutimg} alt="" />
      <AboutUsInfo>
        <Heading>{props.data.aboutUs}</Heading>

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
