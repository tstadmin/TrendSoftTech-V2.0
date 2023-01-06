import React from "react"
import { AiOutlineFilePdf } from "react-icons/ai"
const Brochure = () => {
  return (
    <div className="bg-blue-400/25 border border-blue-500 space-y-6 p-6 rounded-lg px-12 ">
      <h2 className="text-4xl">Brochure</h2>
      <p className="text-sm font-semibold">
        Download our company brochure here
      </p>

      <a href="/pdf/brochure.pdf" target="_blank">
        <button className="bg-blue-500 text-white text-sm p-3 rounded-md mt-4 flex ">
          DOWNLOAD NOW <AiOutlineFilePdf className="text-white ml-1 text-lg" />
        </button>
      </a>
    </div>
  )
}

export default Brochure
