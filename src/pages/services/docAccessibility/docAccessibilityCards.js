import React from "react"
import { ServiceCard } from "../../../components/Services/ServicesStyled"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import BreadCrumb from "../../../components/common/BreadCrumb"
import ServiceCards from "../../../components/services/ServiceCards"
import { graphql, useStaticQuery } from "gatsby"

const DocAccessibilityCards = () => {
  const query = useStaticQuery(CardData)

  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.docAccessibilityCards.list

  return (
    <div>
      <div>
        <Layout title={{ title: "Doc Accessibility" }}>
          <Seo title="Doc-Accessibility" description="TrendSoftTech" />
          <BreadCrumb
            title="Doc Accessibility"
            img="/img/services/Services_main_frame.svg"
          />
          <ServiceCards data={data} title=" Doc Accessibility" />
        </Layout>
      </div>
    </div>
  )
}

export default DocAccessibilityCards

const CardData = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            docAccessibilityCards {
              list {
                listItem {
                  id
                  title
                  label
                  description
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`
