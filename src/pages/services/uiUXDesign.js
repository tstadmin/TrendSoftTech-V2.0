import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

const UiUXDesign = () => {
  const query = useStaticQuery(UiUXDesignData)
  const data =
    query.allMarkdownRemark.edges[1].node.frontmatter.services.uiUXDesign

  const [design, setDesign] = useState([])
  useEffect(() => {
    setDesign(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <Layout>
        <Development data={design} />
      </Layout>
    </div>
  )
}

export default UiUXDesign

const UiUXDesignData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              uiUXDesign {
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
