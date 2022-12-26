import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
const AccessibleExcel = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleExcel, setAccessibleExcel] = useState([])
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.accessible.accessibleExcel
  useEffect(() => {
    setAccessibleExcel(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Accessible data={accessibleExcel} />
      </Layout>
    </div>
  )
}

export default AccessibleExcel

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessibleExcel {
                description
                list {
                  listItems {
                    id
                    title
                    description
                    data
                    list {
                      listItems {
                        id
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
    }
  }
`
