import React from "react"

import { BsArrowRight } from "react-icons/bs"

const InfoCard = props => {
  console.log(props)
  return (
    <div className="mt-20 space-y-16">
      <h1 className="text-center text-6xl font-semibold">
        {props.careers.heading}
      </h1>
      <div className="md:flex  justify-center md:space-x-10 md:px-0 px-8 md:space-y-0  space-y-6 ">
        {props.careers.list?.map((item, idx) => (
          <div className=" space-y-4  hover:shadow-lg shadow-blue-100 hover:duration-500 cursor-pointer bg-black/5 hover:bg-blue-50    min-w-[20%] p-6 ">
            <h1 className="text-xl  font-normal">{item.listItem.title}</h1>
            <div className=" space-y-2 text-sm font-medium">
              <div>
                <h1>{item.listItem.title}</h1>
                <h1>{props.careers.location}</h1>
              </div>
              <div className="flex items-center text-blue-400">
                <h1>{props.careers.CTA}</h1>
                <BsArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoCard
