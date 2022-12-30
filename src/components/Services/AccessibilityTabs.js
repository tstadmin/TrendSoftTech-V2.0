import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { TabsDiv, TabsHeading } from "./ServicesStyled"
const AccessibilityTabs = () => {
  const query = useStaticQuery(AccessibilityTabsQuery)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.AccessibilityTabs

  return (
    <TabsDiv>
      {data.list.map((i, idx) => (
        <TabsHeading key={i.listItem.id}>
          <Link to={i.listItem.link}>{i.listItem.title}</Link>
        </TabsHeading>
      ))}
    </TabsDiv>
  )
}

export default AccessibilityTabs

const AccessibilityTabsQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            AccessibilityTabs {
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
