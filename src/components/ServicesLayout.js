import React from "react"
import Brochure from "./common/Brochure"
import GrowYourBusinnes from "./common/GrowYourBusinnes"
import Portfolios from "./Portfolio/Portfolios"
import { FiChevronDown } from "react-icons/fi"
import { PortfoliosButton } from "./services/ServicesStyled"

const ServicesLayout = ({ children }) => {
  return (
    <div>
      <div className=" xl:flex justify-center xl:space-x-14 lg:px-48 sm:px-24 px-12">
        <div>{children}</div>
        <div className="mt-8 space-y-10">
          <PortfoliosButton>
            <a
              className="hover:bg-blue-700 border-4 border-y-blue-500 border-x-0 duration-700  p-3 rounded-none flex space-x-3 text-2xl justify-center button"
              href="#scroll"
            >
              Portfolio <FiChevronDown className="mt-1 text-xl  " />
            </a>
          </PortfoliosButton>

          <Brochure />
          <GrowYourBusinnes />
        </div>
      </div>
      <div id="scroll" className="top-0">
        <Portfolios />
      </div>
    </div>
  )
}

export default ServicesLayout
