import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"

import Seo from "../../../components/seo"
import Tabs from "../../../components/services/Tabs"
const AccessibleWord = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleWord, setAccessibleWord] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible.accessibleWord
  useEffect(() => {
    setAccessibleWord(data)
  }, [data])

  return (
    <div>
      <Layout title={{ title: "Accessible Word" }}>
        <Seo title="Accessibility-Word" description="TrendSoftTech" />
        <BreadCrumb
          img="/img/BreadCrumb/docaccessibility.svg"
          title="Accessible Word"
        />

        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Accessible data={accessibleWord} title="Accessible Word" />
        </ServicesLayout>
        <Tabs />
      </Layout>
    </div>
  )
}

export default AccessibleWord

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessibleWord {
                description
                list {
                  listItems {
                    id
                    description
                    title
                    list {
                      listItems {
                        id
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
