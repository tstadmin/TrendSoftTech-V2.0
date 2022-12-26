import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
const AccessiblePDFUA = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleUA, setAccessibleUA] = useState([])
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.accessible.accessiblePDFUA
  useEffect(() => {
    setAccessibleUA(data)
  }, [data])
  console.log(accessibleUA)
  return (
    <div>
      <Layout>
        <Accessible data={accessibleUA} />
      </Layout>
    </div>
  )
}

export default AccessiblePDFUA

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePDFUA {
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
