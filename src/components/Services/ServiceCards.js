import { Link } from "gatsby"
import React from "react"
import { TabsData } from "../../../data/TabsData"

const ServiceCards = props => {
  return (
    <div className="grid sm:grid-cols-2 justify-items-center lg:px-0 sm:px-12 px-2  gap-8 mt-24">
      {TabsData.data.map((value, idx) => (
        <div className="lg:w-[50%] min-w-[60%] hover:border-blue-400 hover:shadow-xl hover:duration-700 hover:shadow-blue-400/50 hover:cursor-pointer hover:scale-105 hover:ease-in-out ">
          <Card data={value} />
        </div>
      ))}
    </div>
  )
}

const Card = ({ data }) => {
  return (
    <div className="space-y-4 p-8">
      <h1 className="font-bold">{data.title}</h1>
      <h1>{data.description}</h1>
      <Link to={data.link}>
        <h1 className="text-blue-500 font-medium">{TabsData.metaData.CTA}</h1>
      </Link>
    </div>
  )
}

export default ServiceCards
