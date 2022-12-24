import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

const DigitalMarketing = () => {
  const query = useStaticQuery(DigitalData)
  const data =
    query.allMarkdownRemark.edges[1].node.frontmatter.services.digitalMarketing

  const [digital, setDigital] = useState([])
  useEffect(() => {
    setDigital(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <Layout>
        <Development data={digital} />
      </Layout>
    </div>
  )
}

export default DigitalMarketing

const DigitalData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              digitalMarketing {
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
