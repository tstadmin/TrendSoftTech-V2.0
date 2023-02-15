import React from "react"
import Brochure from "./common/Brochure"


import { DevelopmentDiv } from "./services/ServicesStyled"
const ServicesLayout = ({ children }) => {
  return (
    <div>
      <div className="mt-10 justify-center 2xl:px-28 1920Screen:px-48 sm:px-8 px-12">
        <div>{children}</div>
        <div><Brochure /></div>
     
      </div>
    </div>
  )
}

export default ServicesLayout
