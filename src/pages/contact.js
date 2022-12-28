import React from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import Layout from "../components/layout"
import contactImg from "../../static/img/contact/contact_Frame.svg"
import Contact from "../components/contact/Contact"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="TrendSoftTech" />
      <BreadCrumb title="Contact" img={contactImg} />
      <Contact />
    </Layout>
  )
}

export default contact
