import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

const WebDevelopment = () => {
  const query = useStaticQuery(webDevelopmentData)
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.services.webDevelopment

  const [webDevelopment, setWebDevelopment] = useState([])
  useEffect(() => {
    setWebDevelopment(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Development data={webDevelopment} />
      </Layout>
    </div>
  )
}

export default WebDevelopment

const webDevelopmentData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              webDevelopment {
                description
                list {
                  listItems {
                    id
                    description
                    title
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
    }
  }
`
