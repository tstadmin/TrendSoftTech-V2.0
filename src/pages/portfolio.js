import React, { useEffect, useState } from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import Layout from "../components/layout"
import portfoliobreadCrumb from "../../static/img/portfolio/portfolioBC.svg"
import { graphql, useStaticQuery } from "gatsby"
import Portfolios from "../components/Portfolio/Portfolios"

const Portfolio = () => {
  const query = useStaticQuery(portfolioQuery)

  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.portfolio.projects.list

  const [portfolio, setPortfoilo] = useState([])

  useEffect(() => setPortfoilo(data))
  console.log(data)
  return (
    <div
    // className="
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
