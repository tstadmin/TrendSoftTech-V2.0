import React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"

const Tabs = () => {
  const query = useStaticQuery(tabsData)
  console.log(query)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.tabs

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 540Screen:grid-cols-2 justify-items-center  gap-8 md:px-24 px-6 mt-24 mb-24">
      {data.list.map((i, idx) => (
        <h1 className="lg:text-lg 540Screen:text-sm text-xs  font-semibold underline underline-offset-8 hover:text-blue-500 cursor-pointer">
          <Link to={i.listItem.link}>{i.listItem.title}</Link>
        </h1>
      ))}
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
