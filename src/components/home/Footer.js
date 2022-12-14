import React from "react"

import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
const Footer = props => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center">
        <div>s</div>
        <div>d</div>
        <div>
          <p className="text-[36px] font-bold">Contact Info</p>
          <div className="flex space-x-7">
            <GoLocation />
            <p>
              Trendsoft Technologies Pvt.
              <br /> Ltd,Flat #302, 2nd Floor, PKR
              <br />
              Complex,Road No. 1, KPHB Colony,
              <br /> Kukatpally, Hyderabad – 500072
            </p>
          </div>
          <div className="flex space-x-7">
            <AiOutlineMail />
            <p>
              {" "}
              info@trendsofttech.com <br />
              service@trendsofttech.com
            </p>
          </div>
          <div className="flex space-x-7">
            <BiLink />
            <p>www.trendsofttech.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
