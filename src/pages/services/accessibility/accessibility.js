import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import BreadCrumb from "../../../components/common/BreadCrumb"
import AccessibilityServices from "../../../components/home/AccessibilityServices"
import Layout from "../../../components/layout"

import Seo from "../../../components/seo"

const Accessibility = props => {
  const query = useStaticQuery(queryData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home
  const [accessibilityServices, setAccessibilityServices] = useState([])

  useEffect(() => {
    setAccessibilityServices(data.accessibilityServices)
  }, [data])

  return (
    <div>
      <Layout title={{title:"Accessibility"}}>
        <Seo title="Accessibility" description="TrendSoftTech" />
        <BreadCrumb
          title="Accessibility"
          img="/img/BreadCrumb/Accessibility.svg"
        />
        {/* <AccessibilityTabs /> */}
        <AccessibilityServices accessibilityServices={accessibilityServices} />
      </Layout>
    </div>
  )
}

export default Accessibility

const queryData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home {
              accessibilityServices {
                list {
                  listItem {
                    id
                    img
                    alt
                    title
                    page
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
