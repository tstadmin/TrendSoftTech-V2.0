import React from "react"
import Awards from "../../components/Awards/Awards"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"

const index = () => {
  return (
    <div>
      <Layout>
        <BreadCrumb img="/img/Awards/awardsFrame.svg" title="Awards" />
        <Awards />
      </Layout>
    </div>
  )
}

export default index
