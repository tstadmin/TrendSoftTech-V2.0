import React from "react"

import { Button, Description, Image, Div, VisionInfo } from "./AboutStyle"

const OurVision = props => {
  return (
    <Div>
      <VisionInfo>
        <Button>{props.data.ourVision}</Button>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.ourVisionDescription,
            }}
          />
        </p>

        <Button>{props.data.ourMission}</Button>
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
