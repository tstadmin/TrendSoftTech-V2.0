import React from "react"

import { Heading, Image, Div, AboutUsInfo } from "./AboutStyle"
const AboutUs = props => {
  return (
    <Div>
      <Image src={props.data.aboutimg} alt={props.data.altAbout} />
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
