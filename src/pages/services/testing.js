import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import Tabs from "../../components/services/Tabs"
import ServicesLayout from "../../components/ServicesLayout"

import TestingImg from "../../../static/img/services/testing.svg"

const Testing = () => {
  const query = useStaticQuery(testData)
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.services.testing

  const [test, setTest] = useState([])
  useEffect(() => {
    setTest(data)
  }, [data])
  console.log(data)
  return (
    <div>
      <Layout>
        <BreadCrumb title="Testing" img={TestingImg} />
        <Tabs />
        <ServicesLayout>
          <Development data={test} />
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
