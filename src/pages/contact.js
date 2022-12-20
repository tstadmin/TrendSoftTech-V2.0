import React from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import Layout from "../components/layout"
import contactImg from "../../static/img/contact/contactBC.svg"

const contact = () => {
  return (
    <Layout>
      <BreadCrumb title="Contact" img={contactImg} />
    </Layout>
  )
}

export default contact
