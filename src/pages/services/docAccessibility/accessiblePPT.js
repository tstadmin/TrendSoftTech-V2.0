import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"
import Seo from "../../../components/seo"
const AccessiblePPT = () => {
  const query = useStaticQuery(accessiblePPTData)
  const [accessiblePPT, setAccessiblePPT] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible.accessiblePPT
  useEffect(() => {
    setAccessiblePPT(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Accessibility-PPT" description="TrendSoftTech" />
        <BreadCrumb
          img="/img/BreadCrumb/docaccessibility.svg"
          title="Accessible PPT"
        />
        {/* <AccessibilityTabs /> */}
        <ServicesLayout>
          <Accessible data={accessiblePPT} />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default AccessiblePPT

const accessiblePPTData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePPT {
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
