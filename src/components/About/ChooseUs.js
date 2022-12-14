import React from "react"

import { Heading, Div, ChooseInfo } from "./AboutStyle"

const ChooseUs = props => {
  return (
    <Div>
      <img src={props.data.chooseimg} alt="" />
      <ChooseInfo>
        <Heading>{props.data.whychoose}</Heading>

        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{
            __html: props.data.whychooseDescription,
          }}
        />
      </ChooseInfo>
    </Div>
  )
}
export default ChooseUs
