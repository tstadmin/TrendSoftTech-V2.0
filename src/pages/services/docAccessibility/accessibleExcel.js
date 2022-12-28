import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"
import AccessibilityTabs from "../../../components/services/AccessibilityTabs"
import Seo from "../../../components/seo"
const AccessibleExcel = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleExcel, setAccessibleExcel] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible.accessibleExcel
  useEffect(() => {
    setAccessibleExcel(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Accessibility-Excel" description="TrendSoftTech" />
        <BreadCrumb />
        <AccessibilityTabs />
        <ServicesLayout>
          <Accessible data={accessibleExcel} />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default AccessibleExcel

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessibleExcel {
                description
                list {
                  listItems {
                    id
                    title
                    description
                    data
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
