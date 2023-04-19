import React from "react"
import Brochure from "./common/Brochure"

const ServicesLayout = ({ children, pdf }) => {
  return (
    <div>
      <div className="mt-8 justify-center 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
        <div>{children}</div>
        <div>
          <Brochure pdf={pdf} />
        </div>
      </div>
    </div>
  )
}

export default ServicesLayout
