import React from "react"

import { Heading, Div, AboutUsInfo } from "./AboutStyle"
const AboutUs = props => {
  return (
    <Div>
      <img src={props.data.aboutimg} />
      <AboutUsInfo>
        <Heading className="">{props.data.aboutUs}</Heading>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.aboutUsDescription,
            }}
          />
        </p>
      </AboutUsInfo>
    </Div>
  )
}

export default AboutUs
