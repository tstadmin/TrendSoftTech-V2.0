import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import BreadCrumb from "../../../components/common/BreadCrumb"
import AccessibilityServices from "../../../components/home/AccessibilityServices"
import Layout from "../../../components/layout"

import AccessImg from "../../../../static/img/services/Accessibility2.svg"
import GrowYourBusinnes from "../../../components/common/GrowYourBusinnes"
import AccessibilityTabs from "../../../components/services/AccessibilityTabs"

const Accessibility = props => {
  const query = useStaticQuery(queryData)
  const data = query.allMarkdownRemark.edges[1].node.frontmatter.home
  const [accessibilityServices, setAccessibilityServices] = useState([])

  useEffect(() => {
    setAccessibilityServices(data.accessibilityServices.list)
  }, [data])

  return (
    <Layout>
      <BreadCrumb title="Accessibility" img={AccessImg} />
      <AccessibilityTabs />
      <AccessibilityServices accessibilityServices={accessibilityServices} />
    </Layout>
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