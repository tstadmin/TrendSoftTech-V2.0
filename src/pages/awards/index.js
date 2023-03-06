import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import Awards from "../../components/Awards/Awards"
import BreadCrumb from "../../components/common/BreadCrumb"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Index = () => {
  const query = useStaticQuery(dataQuery)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.awards_certifications
  const [awards, setAwards] = useState([])
  useEffect(() => {
    setAwards(data)
  }, [data])
  return (
    <div>
      <Layout title={{ title: " Certifications" }}>
        <Seo title=" Certifications" description="TrendSoftTech" />
        <BreadCrumb
          img="/img/BreadCrumb/AwardsCertifications.svg"
          title=" Certifications"
        />
        <Awards data={awards} title="Certifications" />
      </Layout>
    </div>
  )
}

export default Index

const dataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            awards_certifications {
              list {
                listItem {
                  id
                  pdf
                  label
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
