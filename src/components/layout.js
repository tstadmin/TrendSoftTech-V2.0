/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./home/Nav"

import Footer from "./home/Footer.js"
import OnclickTop from "./common/OnClickScrollToTop"
import MouseFollower from "./common/MouseFollower"

const Layout = ({ children }) => {
  const query = useStaticQuery(layoutQuery)

  const data = query.allMarkdownRemark.edges[1].node.frontmatter.home.navbar

  // const [nav, setNav] = useState([])

  // useEffect(() => {
  //   setNav(data)
  // }, [query])

  return (
    <div>
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
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home {
              navbar {
                logo
                button
                openMenu
                closeMenu
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
  }
`
