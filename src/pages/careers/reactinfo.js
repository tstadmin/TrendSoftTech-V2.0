import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import RequirementInfo from "../../components/careers/RequirementInfo"
import TopBar from "../../components/common/TopBar"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Reactinfo = () => {
  const query = useStaticQuery(ReactData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.careers.ReactJs
  const [react, setReact] = useState([])
  useEffect(() => {
    setReact(data)
  }, [data])

  return (
    <div>
      <TopBar description="ReactJs Developer" />
      <Layout>
        <Seo title="Careers" description="TrendSoftTech" />
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
