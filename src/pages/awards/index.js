import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import Awards from "../../components/Awards/Awards"
import BreadCrumb from "../../components/common/BreadCrumb"
import TopBar from "../../components/common/TopBar"
import Layout from "../../components/layout"

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
      <TopBar description="Awards & Certifications" />
      <Layout>
        <BreadCrumb
          img="/img/Awards/awardsFrame.svg"
          title="Awards & Certifications"
        />
        <Awards data={awards} />
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
                  img
                }
              }
            }
          }
        }
      }
    }
  }
`
