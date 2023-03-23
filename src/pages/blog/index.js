import React from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const index = () => {
  return (
    <div>
      <Layout>
        <Seo title="Blogs" description="TrendSoftTech" />
        <BreadCrumb img="/img/BreadCrumb/blog.svg" title=" Certifications" />
      </Layout>
    </div>
  )
}

export default index
