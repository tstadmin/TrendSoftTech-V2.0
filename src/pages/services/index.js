import React from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ServiceCards from "../../components/services/ServiceCards"

import { graphql, useStaticQuery } from "gatsby"
import TopBar from "../../components/common/TopBar"
const Services = () => {
  const query = useStaticQuery(ServiceData)

  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.serviceCards.list

  return (
    <div>
      <TopBar description="Services" />
      <Layout title={{title:"Services"}}>
        <Seo title="Services" description="TrendSoftTech" />
        <BreadCrumb
          title=" IT Services"
          img="/img/services/Services_main_frame.svg"
        />

        <ServiceCards data={data} />
      </Layout>
    </div>
  )
}

export default Services

const ServiceData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            serviceCards {
              list {
                listItem {
                  id
                  title
                  description
                  label
                  link
                  CTA
                }
              }
            }
          }
        }
      }
    }
  }
`
