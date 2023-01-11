import React from "react"
import Brochure from "./common/Brochure"
import GrowYourBusinnes from "./common/GrowYourBusinnes"

import { FiChevronDown } from "react-icons/fi"
import { PortfoliosButton } from "./services/ServicesStyled"
import Portfolios from "./Portfolio/Portfolios"
import {
  DevelopmentDiv,
  DevelopmentLayout,
  PortfolioLink,
} from "./services/ServicesStyled"
const ServicesLayout = ({ children }, props) => {
  const data = props.data
  return (
    <div>
      <DevelopmentDiv>
        <div>{children}</div>
        <div className="mt-8 space-y-10">
          <PortfoliosButton>
            <PortfolioLink className=" button" href="#scroll">
              Portfolio <FiChevronDown className="mt-1 text-xl  " />
            </PortfolioLink>
          </PortfoliosButton>

          <Brochure />
          <GrowYourBusinnes />
        </div>
      </DevelopmentDiv>
      {/* <div id="scroll" className="top-0">
        <Portfolios data={data} />
      </div> */}
    </div>
  )
}

export default ServicesLayout
