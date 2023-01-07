import React from "react"
import { AiOutlineFilePdf } from "react-icons/ai"
import { BrochureDiv } from "./CommonStyle"
const Brochure = () => {
  return (
    <BrochureDiv>
      <h2 className="text-4xl">Brochure</h2>
      <p className="text-sm font-semibold">
        Download our company brochure here
      </p>

      <a
        href="/pdf/brochure.pdf"
        target="_blank"
        className="bg-blue-500 text-white text-sm p-3 rounded-md flex  justify-center"
      >
        DOWNLOAD NOW <AiOutlineFilePdf className="text-white ml-1 text-lg" />
      </a>
    </BrochureDiv>
  )
}

export default Brochure
