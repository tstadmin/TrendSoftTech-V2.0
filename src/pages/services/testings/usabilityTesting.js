import Layout from "../../../components/layout"
import React, { useEffect, useState } from "react"
import Seo from "../../../components/seo"
import Development from "../../../components/Services/Development"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"
import { graphql, useStaticQuery } from "gatsby"

const UsabilityTesting = () => {
  const query = useStaticQuery(testingData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.usabilityTesting
  const [usability, setUsability] = useState([])
  useEffect(() => {
    setUsability(data)
  }, [data])
  return (
    <div>
      <Layout>
        <Seo title="Usability Testing" description="TrendSoftTech" />
        <BreadCrumb
          title="Usability Testing"
          img="/img/BreadCrumb/testing.svg"
        />
        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Development data={usability} title="Usability Testing" />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default UsabilityTesting

const testingData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              usabilityTesting {
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
