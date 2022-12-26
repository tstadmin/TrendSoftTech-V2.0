import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import Accessible from "../../../components/Services/Accessible"
import { graphql, useStaticQuery } from "gatsby"
const AccessiblePDFForms = () => {
  const query = useStaticQuery(accessibleFormQuery)
  const [accessibleForm, setAccessibleForm] = useState([])
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.accessible
      .accessiblePDFForms
  useEffect(() => {
    setAccessibleForm(data)
  }, [data])
  console.log(data)
  return (
    <div>
      <Layout>
        <Accessible data={accessibleForm} />
      </Layout>
    </div>
  )
}

export default AccessiblePDFForms

const accessibleFormQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePDFForms {
                description
                list {
                  listItems {
                    id
                    title
                    description
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
