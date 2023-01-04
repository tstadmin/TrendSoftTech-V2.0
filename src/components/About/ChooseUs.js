import React from "react"

import { Button, Description, Image, Div, ChooseInfo } from "./AboutStyle"

const ChooseUs = props => {
  return (
    <Div>
      <Image src={props.data.chooseimg} alt={props.data.altChoose} />
      <ChooseInfo>
        <Button>{props.data.whychoose}</Button>

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
