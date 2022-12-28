import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import Accessible from "../../../components/Services/Accessible"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"
import AccessibilityTabs from "../../../components/services/AccessibilityTabs"
const AccessiblePDFForms = () => {
  const query = useStaticQuery(accessibleFormQuery)
  const [accessibleForm, setAccessibleForm] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible
      .accessiblePDFForms
  useEffect(() => {
    setAccessibleForm(data)
  }, [data])
  console.log(data)
  return (
    <div>
      <Layout>
        <BreadCrumb />
        <AccessibilityTabs />
        <ServicesLayout>
          <Accessible data={accessibleForm} />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default AccessiblePDFForms

const accessibleFormQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePDFForms {
                description
                list {
                  listItems {
                    id
                    title
                    description
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
