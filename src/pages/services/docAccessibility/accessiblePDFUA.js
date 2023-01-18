import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"

import Seo from "../../../components/seo"
import Tabs from "../../../components/services/Tabs"
import TopBar from "../../../components/common/TopBar"
const AccessiblePDFUA = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleUA, setAccessibleUA] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible.accessiblePDFUA
  useEffect(() => {
    setAccessibleUA(data)
  }, [data])
  console.log(accessibleUA)
  return (
    <div>
      <TopBar description="Accessibility-PDF/UA" />
      <Layout>
        <Seo title="Accessibility-PDF/UA" description="TrendSoftTech" />
        <BreadCrumb
          img="/img/BreadCrumb/docaccessibility.svg"
          title="Accessible PDF / UA"
        />

        <ServicesLayout>
          <Accessible data={accessibleUA} />
        </ServicesLayout>
        <Tabs />
      </Layout>
    </div>
  )
}

export default AccessiblePDFUA

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePDFUA {
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
