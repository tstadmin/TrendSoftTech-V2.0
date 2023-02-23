import { graphql, useStaticQuery } from "gatsby"
import BreadCrumb from "../../../components/common/BreadCrumb"
import Layout from "../../../components/layout"
import React, { useEffect, useState } from "react"
import Seo from "../../../components/seo"
import Development from "../../../components/Services/Development"
import ServicesLayout from "../../../components/ServicesLayout"

const FunctionalTesting = () => {
  const query = useStaticQuery(testingData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.functionalTesting
  const [functionalTesting, setFunctionalTesting] = useState([])
  useEffect(() => {
    setFunctionalTesting(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Functional Testing" description="TrendSoftTech" />
        <BreadCrumb
          title="Functional Testing"
          img="/img/BreadCrumb/testing.svg"
        />
        <ServicesLayout>
          {" "}
          <Development data={functionalTesting} title="Functional Testing" />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default FunctionalTesting

const testingData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              functionalTesting {
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
