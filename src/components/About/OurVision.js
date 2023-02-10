import React from "react"

import { Heading, Div, VisionInfo } from "./AboutStyle"

const OurVision = props => {
  return (
    <Div>
      <VisionInfo>
        <Heading>{props.data.ourVision}</Heading>

        <div
          dangerouslySetInnerHTML={{
            __html: props.data.ourVisionDescription,
          }}
        />

        <Heading>{props.data.ourMission}</Heading>

        <div
          dangerouslySetInnerHTML={{
            __html: props.data.ourMissionDescription,
          }}
        />
      </VisionInfo>

      <img src={props.data.Visionimg} alt=""  className="lg:w-[450px] w-[600px]" />
    </Div>
  )
}

export default OurVision
