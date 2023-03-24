import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import ServicesLayout from "../../components/ServicesLayout"

import Seo from "../../components/seo"

const MobileDevelopment = () => {
  const query = useStaticQuery(MobileData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.mobileDevelopment

  const [mobile, setMobile] = useState([])
  useEffect(() => {
    setMobile(data)
  }, [data])

  return (
    <div>
      <Layout title={{ title: "Mobile Development" }}>
        <Seo title="Mobile-Development" description="TrendSoftTech" />

        <BreadCrumb
          title="Mobile Development"
          img="/img/BreadCrumb/MobileDevelopment.svg"
        />

        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Development data={mobile} title="Mobile Development" />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default MobileDevelopment

const MobileData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              mobileDevelopment {
                description
                list {
                  listItems {
                    id
                    title
                    description
                    list {
                      listItems {
                        id
                        title
                        description
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
