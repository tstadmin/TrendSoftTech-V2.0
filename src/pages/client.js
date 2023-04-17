import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Clients from "../components/home/contactUs24x7/Clients"
const Client = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home

  const [clients, setClients] = useState([])

  useEffect(() => {
    setClients(data.clients)
  }, [data])

  return (
    <div>
      <Layout>
        <Clients clients={clients} />
      </Layout>
    </div>
  )
}

export default Client

const dataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home {
              clients {
                list {
                  listItem {
                    id
                    img
                    label
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
