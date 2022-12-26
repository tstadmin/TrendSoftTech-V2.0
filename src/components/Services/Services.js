import React from "react"
import BreadCrumb from "../common/BreadCrumb"
import ServiceCards from "./ServiceCards"
import Tabs from "./Tabs"

const Services = () => {
  return (
    <div
    //   className="
    // bg-red-500
    // sm:bg-blue-500
    // md:bg-green-500
    // lg:bg-yellow-500
    // xl:bg-violet-500
    // 2xl:bg-pink-200
    // 340Screen:bg-orange-400
    // 440Screen:bg-fuchsia-600
    // 540Screen:bg-blue-900"
    >
      <BreadCrumb title="Services" img="/img/services/ServicesMainFrame.svg" />
      <Tabs />
      <ServiceCards />
    </div>
  )
}

export default Services
