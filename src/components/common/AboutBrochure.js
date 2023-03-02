import React from "react"
import { BrochureDiv } from "./CommonStyle"
const AboutBrochure = () => {
  return (
    <div>
      <div className="mt-10 py-4 px-10 sm:space-x-10 space-x-0 sm:space-y-0 space-y-5 sm:flex w-[100%] justify-center bg-[#f2f8ff]">
        <p className=" font-semibold sm:text-xl text-sm mt-1">
          Want to Know More About Our Company ?
        </p>
        <a
          href="/pdf/trends.pdf"
          target="_blank"
          aria-label=" company brochure PDF "
          className="bg-[#0b2d78] text-white sm:text-[16px] text-sm p-2 rounded-md flex  justify-center"
        >
          View Our Brochure
        </a>
      </div>
    </div>
  )
}

export default AboutBrochure
