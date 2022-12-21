/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Nav from "./home/Nav"

import Footer from "./home/Footer.js"
import OnclickTop from "./common/OnClickScrollToTop"
import MouseFollower from "./common/MouseFollower"
import SpeedDial from "./common/SpeedDial"

const Layout = ({ children }) => {
  return (
    <div>
      {/* <SpeedDial /> */}
      <MouseFollower />

      <OnclickTop />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)
