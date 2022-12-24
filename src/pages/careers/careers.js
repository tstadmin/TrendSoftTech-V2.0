import React, { useState, useEffect } from "react"
import InfoCard from "../../components/careers/InfoCard"
import BreadCrumb from "../../components/common/BreadCrumb"

import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Careers = () => {
  const query = useStaticQuery(Data)
  const [careers, setCareers] = useState([])

  const data = query.allMarkdownRemark.edges[0].node.frontmatter.careers
  useEffect(() => {
    setCareers(data)
  }, [data])

  return (
    <Layout>
      <BreadCrumb title="Careers" img="/img/careers/career_Frame.svg" />
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
                  id
                  title
                  Role
                  link
                }
              }
              heading
              location
              CTA
            }
          }
        }
      }
    }
  }
`
