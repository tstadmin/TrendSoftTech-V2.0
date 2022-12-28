import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import RequirementInfo from "../../components/careers/RequirementInfo"
import Layout from "../../components/layout"

const Laravel = () => {
  const query = useStaticQuery(LaravelData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.careers.php
  const [laravel, setLaravel] = useState([])
  useEffect(() => {
    setLaravel(data)
  })

  return (
    <div>
      <Layout>
        <RequirementInfo data={laravel} />
      </Layout>
    </div>
  )
}

export default Laravel

const LaravelData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            careers {
              php {
                title
                list {
                  listItem {
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
`
