import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import ServicesLayout from "../../components/ServicesLayout"

import Seo from "../../components/seo"

const Testing = () => {
  const query = useStaticQuery(testData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.testing

  const [test, setTest] = useState([])
  useEffect(() => {
    setTest(data)
  }, [data])

  return (
    <div>
      <Layout title={{title:"Testing"}}>
        <Seo title="Testing" description="TrendSoftTech" />
        <BreadCrumb title="Testing" img="/img/BreadCrumb/testing.svg" />

        <ServicesLayout>
          <Development data={test} title="Testing" />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default Testing

const testData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              testing {
                title
                description
                test {
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
