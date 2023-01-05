import React from "react"

import {
  Button,
  VisionHeading,
  MissionHeading,
  Image,
  Div,
  VisionInfo,
} from "./AboutStyle"

const OurVision = props => {
  return (
    <Div>
      <VisionInfo>
        <VisionHeading>{props.data.ourVision}</VisionHeading>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourVisionDescription,
            }}
          />
        </p>

        <MissionHeading>{props.data.ourMission}</MissionHeading>
        <p>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourMissionDescription,
            }}
          />
        </p>
      </VisionInfo>

      <Image src={props.data.Visionimg} alt={props.data.altVision} />
    </Div>
  )
}

export default OurVision
