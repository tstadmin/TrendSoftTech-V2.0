import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

const EcommerceDevelopment = () => {
  const query = useStaticQuery(ecommercData)
  const data =
    query.allMarkdownRemark.edges[1].node.frontmatter.services
      .ecommerceDevelopment

  const [ecommerc, setEcommerc] = useState([])
  useEffect(() => {
    setEcommerc(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <Layout>
        <Development data={ecommerc} />
      </Layout>
    </div>
  )
}

export default EcommerceDevelopment

const ecommercData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              ecommerceDevelopment {
                description
                list {
                  listItems {
                    id
                    title
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
    }
  }
`
