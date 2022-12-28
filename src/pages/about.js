import React from "react"
import AboutUs from "../components/About/AboutUs"
import ChooseUs from "../components/About/ChooseUs"
import OurVision from "../components/About/OurVision"
import BreadCrumb from "../components/common/BreadCrumb"

import Layout from "../components/layout"
import Seo from "../components/seo"

const about = () => {
  return (
    <div>
      <Layout>
        <div>
          <Seo title="About" description="TrendSoftTech" />
          <BreadCrumb img="/img/AboutImages/About_Frame.svg" title="About" />
          <AboutUs />
          <OurVision />
          <ChooseUs />
        </div>
      </Layout>
    </div>
  )
}

export default about
