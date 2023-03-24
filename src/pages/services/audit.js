import React from "react"
import AccessibilityAudits from "../../components/common/AccessibilityAudits"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Audit = () => {
  return (
    <div>
      <Layout>
        <Seo title="Blogs" description="TrendSoftTech" />
        <BreadCrumb img="/img/BreadCrumb/blog.svg" title="Blogs" />
        <p className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#913A1D] mt-8">
          Free WCAG 2.1 AA Compliance Summary of Your Website
        </p>
        <AccessibilityAudits />
      </Layout>
    </div>
  )
}

export default Audit
