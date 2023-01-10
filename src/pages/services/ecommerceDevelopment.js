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
          <div className=" xl:flex justify-center xl:space-x-14 lg:px-48 sm:px-24 px-12">
            <Development data={ecommerc} />
            <div className="mt-8 space-y-10">
              <PortfoliosButton>
                <a
                  className="hover:bg-blue-700 border-4 border-y-blue-500 border-x-0 duration-700  p-3 rounded-none flex space-x-3 text-2xl justify-center button"
                  href="#scroll"
                >
                  Portfolio <FiChevronDown className="mt-1 text-xl  " />
                </a>
              </PortfoliosButton>

              <Brochure />
              <GrowYourBusinnes />
            </div>
          </div>
          <div id="scroll" className="top-0">
            <Portfolios data={data} />
          </div>
        </div>

        {/* <Tabs /> */}
        {/* <ServicesLayout>
          <Development data={ecommerc} />
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
