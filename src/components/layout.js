/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./common/Header"
import OnclickTop from "./common/OnClickScrollToTop"
import MouseFollower from "./common/MouseFollower"
import Footer from "./home/Footer"

const Layout = ({ children }) => {
  const query = useStaticQuery(layoutQuery)

  const data = query.allMarkdownRemark.edges[2].node.frontmatter.home.navbar

  // const [nav, setNav] = useState([])

  // useEffect(() => {
  //   setNav(data)
  // }, [query])

  return (
    <div>
      <MouseFollower />

      <OnclickTop />
      <Header data={data} />
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
