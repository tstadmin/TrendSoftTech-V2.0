import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"

const GrowYourBusinnes = () => {
  const Button = tw.button` text-sm  hover:bg-white border-2 border-blue-500 hover:border-[#f37c05]   hover:duration-700  text-white hover:text-blue-500   bg-blue-500 font-semibold duration-75 p-3 rounded-md`

  return (
    <div className="mt-28 ">
      <div className="bg-blue-400/25 rounded-md p-12 space-y-6  px-12">
        <h2 className="text-2xl ">
          Grow Your Business and Build Your Website or Software With Us.
        </h2>
        <Button>
          <Link to="/contact/">CONTACT US</Link>
        </Button>
      </div>
    </div>
  )
}

export default GrowYourBusinnes
