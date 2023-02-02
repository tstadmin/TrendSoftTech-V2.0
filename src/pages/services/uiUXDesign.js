import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import {
  DevelopmentDiv,
  DevelopmentLayout,
  PortfolioLink,
} from "../../components/Services/ServicesStyled"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import { PortfoliosButton } from "../../components/Services/ServicesStyled"

import { FiChevronDown } from "react-icons/fi"
import Seo from "../../components/seo"
import BreadCrumb from "../../components/common/BreadCrumb"
import GrowYourBusinnes from "../../components/common/GrowYourBusinnes"
import Portfolios from "../../components/Portfolio/Portfolios"
import Brochure from "../../components/common/Brochure"
import TopBar from "../../components/common/TopBar"
const UiUXDesign = () => {
  const query = useStaticQuery(UiUXDesignData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.uiUXDesign

  const [design, setDesign] = useState([])
  useEffect(() => {
    setDesign(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <TopBar description="UI/UX Design" />
      <Layout title={{ title:"UI / UX Design"}}>
        <Seo title="UI/UX Design" description="TrendSoftTech" />
        <BreadCrumb
          title="UI / UX Design"
          img="/img/BreadCrumb/UiUXDesign.svg"
        />

        <div className="mt-10">
          <DevelopmentDiv>
            <Development data={design} />
            <DevelopmentLayout>
              <PortfoliosButton>
                <PortfolioLink className="button" href="#scroll">
                  Portfolio <FiChevronDown className="mt-1 text-2xl  " />
                </PortfolioLink>
              </PortfoliosButton>

              <Brochure />
              {/* <GrowYourBusinnes /> */}
            </DevelopmentLayout>
          </DevelopmentDiv>
          <div id="scroll" className="top-0">
            <Portfolios data={data} />
          </div>
        </div>

        {/* <ServicesLayout>
          <Development data={design} />
        </ServicesLayout> */}
      </Layout>
    </div>
  )
}

export default UiUXDesign

const UiUXDesignData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              uiUXDesign {
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
