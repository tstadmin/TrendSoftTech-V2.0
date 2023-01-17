import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import { PortfoliosButton } from "../../components/Services/ServicesStyled"

import { FiChevronDown } from "react-icons/fi"
import Seo from "../../components/seo"
import Brochure from "../../components/common/Brochure"
import GrowYourBusinnes from "../../components/common/GrowYourBusinnes"
import Portfolios from "../../components/Portfolio/Portfolios"
import {
  DevelopmentDiv,
  DevelopmentLayout,
  PortfolioLink,
} from "../../components/Services/ServicesStyled"
const EcommerceDevelopment = () => {
  const query = useStaticQuery(ecommercData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services
      .ecommerceDevelopment

  const [ecommerc, setEcommerc] = useState([])
  useEffect(() => {
    setEcommerc(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Ecommerce-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Ecommerce Development"
          img="/img/BreadCrumb/EcommerceDevelopment.svg"
        />
        <div>
          <DevelopmentDiv>
            <Development data={ecommerc} />
            <DevelopmentLayout>
              <PortfoliosButton>
                <PortfolioLink className="button" href="#scroll">
                  Portfolio <FiChevronDown className="mt-1 text-xl  " />
                </PortfolioLink>
              </PortfoliosButton>

              <Brochure />
              <GrowYourBusinnes />
            </DevelopmentLayout>
          </DevelopmentDiv>
          <div id="scroll" className="top-0">
            <Portfolios data={data} />
          </div>
        </div>

        {/* <ServicesLayout>
          <Development data={data} />
        </ServicesLayout> */}
      </Layout>
    </div>
  )
}

export default EcommerceDevelopment

const ecommercData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              ecommerceDevelopment {
                description
                list {
                  listItems {
                    id
                    title
                    description
                    list {
                      listItems {
                        id
                        title
                        description
                      }
                    }
                  }
                }
                portfolios {
                  listItem {
                    id
                    img
                    title
                    link
                    about
                    label
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
