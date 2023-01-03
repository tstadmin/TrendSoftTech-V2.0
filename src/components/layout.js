/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./common/Header"
import OnclickTop from "./common/OnClickScrollToTop"
import MouseFollower from "./common/MouseFollower"
import Footer from "./home/Footer"

const Layout = ({ children }) => {
  const query = useStaticQuery(layoutQuery)

  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home.navbar
  const footerData =
    query.allMarkdownRemark.edges[0].node.frontmatter.home.footer

  const [footer, setFooter] = useState([])

  useEffect(() => {
    setFooter(footerData)
  }, [footerData])

  return (
    <div>
      <MouseFollower />

      <OnclickTop />
      <Header data={data} />
      {children}
      <Footer data={footer} />
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
              footer {
                logo
                alt
                itTitle
                description
                itService {
                  listItem {
                    id
                    page
                    title
                  }
                }
                contactTitle
                itTitle
                local
                mail
                mailLink
                website
                facebookLink
                linkedinLink
                websiteLink
                reserved
              }
            }
          }
        }
      }
    }
  }
`
