import React from "react"
import Brochure from "./common/Brochure"
import GrowYourBusinnes from "./common/GrowYourBusinnes"

import { DevelopmentDiv } from "./services/ServicesStyled"
const ServicesLayout = ({ children }) => {
  return (
    <div>
      <DevelopmentDiv>
        <div>{children}</div>
        <div className="mt-8 space-y-10">
          <Brochure />
          <GrowYourBusinnes />
        </div>
      </DevelopmentDiv>
    </div>
  )
}

export default ServicesLayout
