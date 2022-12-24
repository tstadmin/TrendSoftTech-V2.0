import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

const MobileDevelopment = () => {
  const query = useStaticQuery(MobileData)
  const data =
    query.allMarkdownRemark.edges[1].node.frontmatter.services.mobileDevelopment

  const [mobile, setMobile] = useState([])
  useEffect(() => {
    setMobile(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <Layout>
        <Development data={mobile} />
      </Layout>
    </div>
  )
}

export default MobileDevelopment

const MobileData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              mobileDevelopment {
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
