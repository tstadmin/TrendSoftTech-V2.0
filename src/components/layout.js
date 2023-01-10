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
import Footer from "./home/Footer"
import TopBar from "./common/TopBar"
import SkipToMainContent from "./common/SkipToMainContent"

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
      <SkipToMainContent />
      <TopBar />
      <Header data={data} />
      <div id="mainContent">{children}</div>
      <Footer data={footer} />
      <OnclickTop />
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
                openMenu
                alt
                button
                closeMenu
                contact
                careers
                list {
                  listItem {
                    id
                    title
                    page
                    subTitle {
                      listItem {
                        id
                        page
                        title
                      }
                    }
                  }
                }
                mobilelist {
                  listItem {
                    id
                    page
                    title
                    mobilesub {
                      listItem {
                        id
                        page
                        title
                      }
                    }
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
                serviceMail
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
