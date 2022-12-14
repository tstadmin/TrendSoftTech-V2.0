import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import RequirementInfo from "../../components/careers/RequirementInfo"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Designer = () => {
  const query = useStaticQuery(designerData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.careers.designer
  const [designer, setDesigner] = useState([])
  useEffect(() => {
    setDesigner(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Careers" description="TrendSoftTech" />
        <RequirementInfo data={designer} />
      </Layout>
    </div>
  )
}

export default Designer

const designerData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            careers {
              designer {
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
