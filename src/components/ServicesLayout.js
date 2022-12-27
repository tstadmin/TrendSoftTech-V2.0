import React from "react"
import Brochure from "./common/Brochure"
import GrowYourBusinnes from "./common/GrowYourBusinnes"

const ServicesLayout = ({ children }) => {
  return (
    <div className=" xl:flex justify-center space-x-14 px-44">
      <div>{children}</div>
      <div className="mt-8">
        <Brochure />
        <GrowYourBusinnes />
      </div>
    </div>
  )
}

export default ServicesLayout
