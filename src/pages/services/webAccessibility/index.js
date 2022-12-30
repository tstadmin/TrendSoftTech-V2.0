import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../../components/common/BreadCrumb"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import AccessibilityTabs from "../../../components/services/AccessibilityTabs"
import Accessible from "../../../components/Services/Accessible"
import ServicesLayout from "../../../components/ServicesLayout"
const WebAccessible = () => {
  const query = useStaticQuery(WebAccessibleData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.webAccessibility
      .webAccessibility

  const [webAccessible, setWebAccessible] = useState([])
  useEffect(() => {
    setWebAccessible(data)
  }, [data])
  console.log(data)
  return (
    <div>
      <Layout>
        <Seo title="Web-Accessibility" description="TrendSoftTech" />
        <BreadCrumb
          title="Web Accessibility"
          img="/img/BreadCrumb/Webaccessibility.svg"
        />
        <AccessibilityTabs />
        <ServicesLayout>
          <Accessible data={webAccessible} />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default WebAccessible

const WebAccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            webAccessibility {
              webAccessibility {
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
