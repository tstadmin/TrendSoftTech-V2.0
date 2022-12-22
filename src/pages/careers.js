import React from "react"
import InfoCard from "../components/careers/InfoCard"
import BreadCrumb from "../components/common/BreadCrumb"
import contactImg from "../../static/img/contact/contactBC.svg"

import Layout from "../components/layout"

const careers = () => {
  return (
    <Layout>
      <BreadCrumb title="Careers" img={contactImg} />
      <InfoCard />
    </Layout>
  )
}

export default careers
