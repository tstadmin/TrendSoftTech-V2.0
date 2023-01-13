import React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import { TabButton } from "./ServicesStyled"

const Tabs = () => {
  const query = useStaticQuery(tabsData)

  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.AccessibilityTabs
  console.log(data)
  return (
    <div className="2xl:px-24 px-8 mt-16">
      <ul className="grid 2xl:grid-cols-5 lg:grid-cols-3 gap-3 ">
        {data.list.map(item => (
          <TabButton>
            <Link
              className="hover:bg-blue-500 border-2 border-blue-500  duration-700   rounded-none flex space-x-3 text-xl justify-center Tab "
              href={item.listItem.link}
            >
              {item.listItem.title}
            </Link>
          </TabButton>
        ))}
      </ul>
    </div>
  )
}

export default Tabs

const tabsData = graphql`
  query {
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
