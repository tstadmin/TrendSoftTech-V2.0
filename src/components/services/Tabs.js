import React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import { TabsDiv, TabsHeading } from "./ServicesStyled"
const Tabs = () => {
  const query = useStaticQuery(tabsData)
  console.log(query)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.tabs

  return (
    <TabsDiv>
      {data.list.map((i, idx) => (
        <TabsHeading>
          <Link to={i.listItem.link}>{i.listItem.title}</Link>
        </TabsHeading>
      ))}
    </TabsDiv>
  )
}

export default Tabs

const tabsData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tabs {
              list {
                listItem {
                  id
                  link
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
