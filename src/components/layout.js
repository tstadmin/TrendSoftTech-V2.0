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

import SkipToMainContent from "./common/SkipToMainContent"
import BounceLoader from "react-spinners/BounceLoader"
import TopBar from "./common/TopBar"

const Layout = ({ children, title }) => {
  const query = useStaticQuery(layoutQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home.navbar
  const footerData =
    query.allMarkdownRemark.edges[0].node.frontmatter.home.footer

  const [footer, setFooter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setFooter(footerData)
    setLoading(false)
  }, [footerData])

  return (
    <div>
      <>
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50vh",
            }}
          >
            <BounceLoader color="#0c62d2" />
          </div>
        ) : (
          <>
            <SkipToMainContent />
            <TopBar />
            <Header data={data} />
            <div id="mainContent">{children}</div>
            <Footer data={footer} />
            {/* <OnclickTop /> */}
          </>
        )}
      </>
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
                alt
                button
                contact
                careers
                list {
                  listItem {
                    id
                    title
                    name
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
                  home
                  about
                  services
                  award
                  awardPage
                  uiuxDesignLink
                  uiuxDesign
                  itServices {
                    listItem {
                      id
                      page
                      title
                    }
                  }
                  subTest {
                    listItem {
                      id
                      page
                      title
                    }
                  }
                  test
                  accessibility
                  docaccessibility
                  webaccessibility
                  digital
                  careers
                  contact
                  accessibilityPage
                  aboutPage
                  servicesPage
                  webaccessibilityPage
                  careersPage
                  contactPage
                  testPage
                  digitalPage
                  docaccessibilityPage
                  homePage
                }
              }
              footer {
                Accessibility {
                  listItem {
                    id
                    page
                    title
                  }
                }
                AccessibilityTitle
                Designing {
                  listItem {
                    id
                    page
                    title
                  }
                }
                DesigningTitle
                DgmTitle
                DigitalMarketing {
                  listItem {
                    id
                    page
                    title
                  }
                }
                Pages {
                  listItem {
                    id
                    page
                    title
                  }
                }
                PagesTitle
                Testing {
                  listItem {
                    id
                    page
                    title
                  }
                }
                TestingTitle
                contact
                contactName
                contactTitle
                contactUs
                facebookLink
                instagramLink
                itService {
                  listItem {
                    id
                    page
                    title
                  }
                }
                itTitle
                linkedinLink
                local
                logo
                mail
                mailLink
                reserved
                serviceMail
                website
              }
            }
          }
        }
      }
    }
  }
`
