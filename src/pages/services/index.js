import React from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ServiceCards from "../../components/services/ServiceCards"
import Tabs from "../../components/services/Tabs"

const Services = () => {
  return (
    <Layout>
      <Seo title="Services" description="TrendSoftTech" />
      <BreadCrumb
        title="Services"
        img="/img/services/Services_main_frame.svg"
      />
      <Tabs />
      <ServiceCards />
    </Layout>
  )
}

export default Services
