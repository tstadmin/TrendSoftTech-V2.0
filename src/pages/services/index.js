import React from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import ServiceCards from "../../components/services/ServiceCards"
import Tabs from "../../components/services/Tabs"

const Services = () => {
  return (
    <Layout>
      <BreadCrumb title="Services" img="/img/services/ServicesMainFrame.svg" />
      <Tabs />
      <ServiceCards />
    </Layout>
  )
}

export default Services
