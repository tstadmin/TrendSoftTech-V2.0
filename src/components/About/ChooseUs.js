import React from "react"

import { Heading, Div, ChooseInfo } from "./AboutStyle"

const ChooseUs = props => {
  return (
    <Div>
      <img src={props.data.chooseimg} />
      <ChooseInfo>
        <Heading>{props.data.whychoose}</Heading>

        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.whychooseDescription,
            }}
          />
        </p>
      </ChooseInfo>
    </Div>
  )
}
export default ChooseUs
