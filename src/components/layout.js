/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./home/Nav"

import Footer from "./home/Footer.js"
import OnclickTop from "./common/OnClickScrollToTop"
import MouseFollower from "./common/MouseFollower"
// import SpeedDial from "./common/SpeedDial"

const Layout = ({ children }) => {
  const query = useStaticQuery(layoutQuery)

  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home.navbar

  const [nav, setNav] = useState([])

  useEffect(() => {
    setNav(data)
  }, [])

  return (
    <div
    //   className="
    // bg-red-500
    // sm:bg-blue-500
    // md:bg-green-500
    // lg:bg-yellow-500
    // xl:bg-violet-500
    // 2xl:bg-pink-200
    // 340Screen:bg-orange-400
    // 440Screen:bg-fuchsia-600
    // 540Screen:bg-blue-900"
    >
      {/* <SpeedDial /> */}
      <MouseFollower />

      <OnclickTop />
      <Nav data={data} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

const layoutQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home {
              navbar {
                logo
                button
                closeMenu
                openMenu
                list {
                  listItem {
                    id
                    title
                    link
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
