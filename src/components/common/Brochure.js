import { Link } from "gatsby"
import React from "react"

const Brochure = () => {
  return (
    <div className="bg-blue-400/25 border border-blue-500 space-y-6 p-6 rounded-lg px-12">
      <h1 className="text-4xl">Brochure</h1>
      <p className="text-sm font-semibold">
        Download our company brochure here
      </p>

      <button className="bg-blue-500 text-white text-sm p-3 rounded-md ">
        <a href="/pdf/brochure.pdf" target="_blank">
          DOWNLOAD NOW
        </a>
      </button>
    </div>
  )
}

export default Brochure
