import React, { useEffect, useState } from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import Layout from "../components/layout"
import portfoliobreadCrumb from "../../static/img/portfolio/portfolioBC.svg"
import { graphql, useStaticQuery } from "gatsby"
import Portfolios from "../components/Portfolio/Portfolios"

const Portfolio = () => {
  const query = useStaticQuery(portfolioQuery)

  const data =
    query.allMarkdownRemark.edges[1].node.frontmatter.portfolio.projects.list

  const [portfolio, setPortfoilo] = useState([])

  useEffect(() => setPortfoilo(data), [data])

  return (
    <div>
      <Layout>
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
