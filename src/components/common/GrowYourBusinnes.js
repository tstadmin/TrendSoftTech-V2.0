import { Link } from "gatsby"
import React from "react"
import { GrowBusinnes } from "./CommonStyle"
const GrowYourBusinnes = () => {
  return (
    <div className="mt-28 ">
      <GrowBusinnes>
        <h2>Grow Your Business and Build Your Website or Software With Us.</h2>
        <div>
          <Link
            to="/contact/"
            className=" text-sm  hover:bg-white border-2 border-blue-500 hover:border-[#f37c05]   hover:duration-700  text-white hover:text-blue-500   bg-blue-500 font-semibold duration-75 p-3 rounded-md"
          >
            CONTACT US
          </Link>
        </div>
      </GrowBusinnes>
    </div>
  )
}

export default GrowYourBusinnes
