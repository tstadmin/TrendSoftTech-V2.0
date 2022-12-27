import React from "react"
import tw from "twin.macro"

const GrowYourBusinnes = () => {
  const Button = tw.button` text-sm  hover:bg-white border-2 border-blue-500 hover:border-[#f37c05]   hover:duration-700  text-white hover:text-blue-500  font-mono bg-blue-500 font-semibold duration-75 px-8 py-1 mb-1 rounded-full`

  return (
    <div className="mt-28 ">
      <div className="bg-blue-400/60 rounded-md p-12 space-y-6  px-12">
        <h1 className="text-2xl">
          Grow Your Business and Build Your Website or Software With Us.
        </h1>
        <Button>Contact US</Button>
      </div>
    </div>
  )
}

export default GrowYourBusinnes
