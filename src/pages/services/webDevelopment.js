import React, { useEffect, useState } from "react"

import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import { FiChevronDown } from "react-icons/fi"

import { graphql, useStaticQuery } from "gatsby"
import Seo from "../../components/seo"
import Portfolios from "../../components/Portfolio/Portfolios"
import BreadCrumb from "../../components/common/BreadCrumb"
import Brochure from "../../components/common/Brochure"
import GrowYourBusinnes from "../../components/common/GrowYourBusinnes"
import { PortfoliosButton } from "../../components/services/ServicesStyled"

const WebDevelopment = () => {
  const query = useStaticQuery(webDevelopmentData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.webDevelopment

  const [webDevelopment, setWebDevelopment] = useState([])
  useEffect(() => {
    setWebDevelopment(data)
  }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Web-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Web Development"
          img="/img/BreadCrumb/WebDevelopment.svg"
        />
        <div>
          <div className=" xl:flex justify-center xl:space-x-14 lg:px-48 sm:px-24 px-12">
            <Development data={data} />
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
      </Layout>
    </div>
  )
}

export default WebDevelopment

const webDevelopmentData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              webDevelopment {
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
