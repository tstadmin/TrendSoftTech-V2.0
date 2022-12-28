import React, { useEffect, useState } from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import Layout from "../components/layout"
import portfoliobreadCrumb from "../../static/img/portfolio/Portfolio_Frame.svg"
import { graphql, useStaticQuery } from "gatsby"
import Portfolios from "../components/Portfolio/Portfolios"
import Seo from "../components/seo"

const Portfolio = () => {
  const query = useStaticQuery(portfolioQuery)

  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.portfolio.projects.list

  const [portfolio, setPortfoilo] = useState([])

  useEffect(() => setPortfoilo(data), [data])

  return (
    <div>
      <Layout>
        <Seo title="Portfolio" description="TrendSoftTech" />
        <BreadCrumb img={portfoliobreadCrumb} title="Portfolio" />
        <Portfolios portfolio={portfolio} />
      </Layout>
    </div>
  )
}

export default Portfolio

const portfolioQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            portfolio {
              projects {
                list {
                  listItem {
                    id
                    title
                    img
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
