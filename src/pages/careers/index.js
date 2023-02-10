import React, { useState, useEffect } from "react"
import InfoCard from "../../components/careers/InfoCard"
import BreadCrumb from "../../components/common/BreadCrumb"

import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../../components/seo"

const Careers = () => {
  const query = useStaticQuery(Data)
  const [careers, setCareers] = useState([])

  const data = query.allMarkdownRemark.edges[0].node.frontmatter.careers
  useEffect(() => {
    setCareers(data)
  }, [data])

  return (
    <div>
  
      <Layout title={{title:"Careers"}}>
        <Seo title="Careers" description="TrendSoftTech" />
        <BreadCrumb title="Careers" img="/img/BreadCrumb/careersFrame.svg" />
        <InfoCard careers={careers} title="Careers" />
      </Layout>
    </div>
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
                  label
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
