import React from "react"

import { Heading, Div, VisionInfo } from "./AboutStyle"

const OurVision = props => {
  return (
    <Div>
      <VisionInfo>
        <Heading>{props.data.ourVision}</Heading>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourVisionDescription,
            }}
          />
        </p>

        <Heading>{props.data.ourMission}</Heading>
        <p>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourMissionDescription,
            }}
          />
        </p>
      </VisionInfo>

      <img src={props.data.Visionimg} />
    </Div>
  )
}

export default OurVision
