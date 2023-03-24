import { graphql, useStaticQuery } from "gatsby"
import BreadCrumb from "../../../components/common/BreadCrumb"
import Layout from "../../../components/layout"
import React, { useEffect, useState } from "react"
import Seo from "../../../components/seo"
import Development from "../../../components/Services/Development"
import ServicesLayout from "../../../components/ServicesLayout"

const PerformanceTesting = () => {
  const query = useStaticQuery(testingData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services
      .performanceTesting
  const [performance, setPerformance] = useState([])
  useEffect(() => {
    setPerformance(data)
  }, [data])

  return (
    <div>
      {" "}
      <Layout>
        <Seo title="Performance Testing" description="TrendSoftTech" />
        <BreadCrumb
          title="Performance Testing"
          img="/img/BreadCrumb/testing.svg"
        />
        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Development data={performance} title="Performance Testing" />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default PerformanceTesting

const testingData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              performanceTesting {
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
