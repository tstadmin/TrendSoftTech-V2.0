import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../../components/layout"
import Accessible from "../../../components/Services/Accessible"
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
        <Accessible data={webAccessible} />
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
