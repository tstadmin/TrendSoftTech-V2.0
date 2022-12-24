import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

const Testing = () => {
  const query = useStaticQuery(testData)
  const data =
    query.allMarkdownRemark.edges[1].node.frontmatter.services.testing

  const [test, setTest] = useState([])
  useEffect(() => {
    setTest(data)
  }, [data])
  console.log(data)
  return (
    <div>
      <Layout>
        <Development data={test} />
      </Layout>
    </div>
  )
}

export default Testing

const testData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              testing {
                title
                description
                test {
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
`
