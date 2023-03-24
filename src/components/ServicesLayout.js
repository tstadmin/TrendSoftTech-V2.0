import React from "react"
import Brochure from "./common/Brochure"

const ServicesLayout = ({ children, pdf }) => {
  return (
    <div>
      <div className="mt-8 justify-center 2xl:px-28 1920Screen:px-48 sm:px-8 px-12">
        <div>{children}</div>
        <div>
          <Brochure pdf={pdf} />
        </div>
      </div>
    </div>
  )
}

export default ServicesLayout
