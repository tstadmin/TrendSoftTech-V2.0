import { graphql, useStaticQuery } from "gatsby"
import BreadCrumb from "../../../components/common/BreadCrumb"
import Layout from "../../../components/layout"
import React, { useEffect, useState } from "react"
import Seo from "../../../components/seo"
import Development from "../../../components/Services/Development"
import ServicesLayout from "../../../components/ServicesLayout"

const SecurityTesting = () => {
  const query = useStaticQuery(testingData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.securityTesting
  const [security, setSecurity] = useState([])
  useEffect(() => {
    setSecurity(data)
  }, [data])
  return (
    <div>
      <Layout>
        <Seo title="Security Testing" description="TrendSoftTech" />
        <BreadCrumb
          title="Security Testing"
          img="/img/BreadCrumb/testing.svg"
        />
        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Development data={security} title="Security Testing" />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default SecurityTesting

const testingData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              securityTesting {
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
`
