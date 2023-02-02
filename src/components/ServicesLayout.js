import React from "react"
import Brochure from "./common/Brochure"
import GrowYourBusinnes from "./common/GrowYourBusinnes"

import { DevelopmentDiv } from "./services/ServicesStyled"
const ServicesLayout = ({ children }) => {
  return (
    <div>
      <div className="xl:flex mt-10 justify-center  xl:space-x-14 2xl:px-28 1920Screen:px-48 sm:px-8 px-12">
        <div>{children}</div>
        <div className="mt-8 space-y-10">
          <Brochure />
          {/* <GrowYourBusinnes /> */}
        </div>
      </div>
    </div>
  )
}

export default ServicesLayout
