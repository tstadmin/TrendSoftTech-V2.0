import React from "react"

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
import {
  DevelopmentDiv,
  PortfolioLink,
  DevelopmentLayout,
} from "../../components/services/ServicesStyled"

const WebDevelopment = () => {
  const query = useStaticQuery(webDevelopmentData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.webDevelopment

  // const [webDevelopment, setWebDevelopment] = useState([])
  // useEffect(() => {
  //   setWebDevelopment(data)
  // }, [data])

  return (
    <div>
      <Layout>
        <Seo title="Web-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Web Development"
          img="/img/BreadCrumb/WebDevelopment.svg"
        />

        <div>
          <DevelopmentDiv>
            <Development data={data} />
            <DevelopmentLayout>
              <PortfoliosButton>
                <PortfolioLink className=" button " href="#scroll">
                  Portfolio <FiChevronDown className="mt-1 text-2xl  " />
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
