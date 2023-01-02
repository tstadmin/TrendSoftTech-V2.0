import React from "react"

import { Button, Description, Image, Div, AboutUsInfo } from "./AboutStyle"
const AboutUs = props => {
  return (
    <Div>
      <Image src={props.data.aboutimg} alt="about image" />
      <AboutUsInfo>
        <Button>{props.data.aboutUs}</Button>
        <Description>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.aboutUsDescription,
            }}
          />
        </Description>
      </AboutUsInfo>
    </Div>
  )
}

export default AboutUs
