import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import RequirementInfo from "../../components/careers/RequirementInfo"
import Layout from "../../components/layout"

const Reactinfo = () => {
  const query = useStaticQuery(ReactData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.careers.ReactJs
  const [react, setReact] = useState([])
  useEffect(() => {
    setReact(data)
  })
  console.log(react)
  return (
    <div>
      <Layout>
        <RequirementInfo data={react} />
      </Layout>
    </div>
  )
}

export default Reactinfo

const ReactData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            careers {
              ReactJs {
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
