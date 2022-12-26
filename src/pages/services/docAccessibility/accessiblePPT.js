import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
const AccessiblePPT = () => {
  const query = useStaticQuery(accessiblePPTData)
  const [accessiblePPT, setAccessiblePPT] = useState([])
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.accessible.accessiblePPT
  useEffect(() => {
    setAccessiblePPT(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Accessible data={accessiblePPT} />
      </Layout>
    </div>
  )
}

export default AccessiblePPT

const accessiblePPTData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePPT {
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
