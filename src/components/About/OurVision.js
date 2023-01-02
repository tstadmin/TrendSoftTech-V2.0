import React from "react"

import { Button, Description, Image, Div, VisionInfo } from "./AboutStyle"

const OurVision = props => {
  return (
    <Div>
      <VisionInfo>
        <Button>{props.data.ourVision}</Button>
        <Description>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourVisionDescription,
            }}
          />
        </Description>

        <Button>{props.data.ourMission}</Button>
        <Description>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourMissionDescription,
            }}
          />
        </Description>
      </VisionInfo>

      <Image src={props.data.Visionimg} alt="about images" />
    </Div>
  )
}

export default OurVision
