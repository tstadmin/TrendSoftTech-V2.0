import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import TopBar from "../components/common/TopBar"
import Layout from "../components/layout"
import Portfolios from "../components/Portfolio/Portfolios"
import Seo from "../components/seo"

const Portfolio = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.portfolio
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    setPortfolio(data)
  }, [data])
  console.log(portfolio)
  return (
    <div>
      <TopBar description="Portfolio" />
      <Layout>
        <Seo title="About" description="TrendSoftTech" />
        <BreadCrumb img="/img/AboutImages/About_Frame.svg" title="portfolios" />
        <Portfolios data={portfolio} />
      </Layout>
    </div>
  )
}

export default Portfolio

const dataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            portfolio {
              portfolios {
                listItem {
                  id
                  img
                  title
                  link
                  about
                }
              }
            }
          }
        }
      }
    }
  }
`
