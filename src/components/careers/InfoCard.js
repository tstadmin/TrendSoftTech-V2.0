import React from "react"

import { BsArrowRight } from "react-icons/bs"

const InfoCard = () => {
  return (
    <div className="space-y-4 border border-black min-w-[20%] p-6 ">
      <h1 className="text-xl font-medium">React js Developer</h1>
      <div className="space-y-2 text-sm font-medium">
        <div>
          <h1>Reactjs Developer</h1>
          <h1>hyderabad</h1>
        </div>
        <div className="flex items-center text-blue-400">
          <h1>More Details</h1>
          <BsArrowRight size={20} />
        </div>
      </div>
    </div>
  )
}

export default InfoCard
