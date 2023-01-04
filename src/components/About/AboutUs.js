import React from "react"

import { Button, Description, Image, Div, AboutUsInfo } from "./AboutStyle"
const AboutUs = props => {
  return (
    <Div>
      <Image src={props.data.aboutimg} alt={props.data.altAbout} />
      <AboutUsInfo>
        <Button>{props.data.aboutUs}</Button>
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
