import React from "react"
import AboutUs from "../components/About/AboutUs"
import ChooseUs from "../components/About/ChooseUs"
import OurVision from "../components/About/OurVision"
import BreadCrumb from "../components/common/BreadCrumb"

import Layout from "../components/layout"

const about = () => {
  return (
    <div>
      <Layout>
        <div
        // className="
        //   bg-red-500
        //   sm:bg-blue-500
        //   md:bg-green-500
        //   lg:bg-yellow-500
        //   xl:bg-violet-500
        //   2xl:bg-pink-200
        //   340Screen:bg-orange-400
        //   440Screen:bg-fuchsia-600
        //   540Screen:bg-blue-900"
        >
          <BreadCrumb img="/img/About/BreadCrumbAbout.svg" title="About" />
          <AboutUs />
          <OurVision />
          <ChooseUs />
        </div>
      </Layout>

      {/* <AboutUs />
      <OurVision />
      <ChooseUs /> */}
    </div>
  )
}

export default about
