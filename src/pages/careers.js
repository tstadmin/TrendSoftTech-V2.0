import React, { useState, useEffect } from "react"
import InfoCard from "../components/careers/InfoCard"
import BreadCrumb from "../components/common/BreadCrumb"
import contactImg from "../../static/img/contact/contactBC.svg"

import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Careers = () => {
  const query = useStaticQuery(Data)
  const [careers, setCareers] = useState([])
  const data = query.allMarkdownRemark.edges[1].node.frontmatter.careers
  useEffect(() => {
    setCareers(data)
  })

  return (
    <Layout>
      <BreadCrumb title="Careers" img={contactImg} />
      <InfoCard careers={careers} />
    </Layout>
  )
}

export default Careers

const Data = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            careers {
              list {
                listItem {
                  title
                  Role
                }
              }
              location
              CTA
              heading
            }
          }
        }
      }
    }
  }
`
