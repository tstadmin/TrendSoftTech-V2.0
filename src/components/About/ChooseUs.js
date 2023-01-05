import React from "react"

import { Button, ChooseHeading, Image, Div, ChooseInfo } from "./AboutStyle"

const ChooseUs = props => {
  return (
    <Div>
      <Image src={props.data.chooseimg} alt={props.data.altChoose} />
      <ChooseInfo>
        <ChooseHeading>{props.data.whychoose}</ChooseHeading>

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
