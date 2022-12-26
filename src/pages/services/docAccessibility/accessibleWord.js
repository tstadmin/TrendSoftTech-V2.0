import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
const AccessibleWord = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleWord, setAccessibleWord] = useState([])
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.accessible.accessibleWord
  useEffect(() => {
    setAccessibleWord(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Accessible data={accessibleWord} />
      </Layout>
    </div>
  )
}

export default AccessibleWord

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessibleWord {
                description
                list {
                  listItems {
                    id
                    description
                    title
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
