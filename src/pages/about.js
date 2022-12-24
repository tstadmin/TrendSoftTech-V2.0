import React from "react"
import AboutUs from "../components/About/AboutUs"
import ChooseUs from "../components/About/ChooseUs"
import OurVision from "../components/About/OurVision"
import BreadCrumb from "../components/common/BreadCrumb"
import Tabs from "../components/services/Tabs"

import Layout from "../components/layout"

const about = () => {
  return (
    <div>
      <Layout>
        {/* <div>
          <BreadCrumb
            img="/img/AboutImages/BreadCrumbAbout.svg"
            title="About"
          />
          <AboutUs />
          <OurVision />
          <ChooseUs />
        </div> */}
        <Tabs />
      </Layout>
    </div>
  )
}

export default about
