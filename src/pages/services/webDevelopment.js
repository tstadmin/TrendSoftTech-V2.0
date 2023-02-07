import React from "react"

import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"
import Seo from "../../components/seo"
import Portfolios from "../../components/Portfolio/Portfolios"
import BreadCrumb from "../../components/common/BreadCrumb"
import Brochure from "../../components/common/Brochure"

import {
  DevelopmentDiv,
  DevelopmentLayout,
} from "../../components/services/ServicesStyled"

const WebDevelopment = () => {
  const query = useStaticQuery(webDevelopmentData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.webDevelopment


  return (
    <div>
      <Layout title={{title:"Web Development"}} >
        <Seo title="Web-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Web Development"
          img="/img/BreadCrumb/WebDevelopment.svg"
        />

        <div>
          <DevelopmentDiv>
            <Development data={data}    title="Web Development" />
            <DevelopmentLayout>
       
                <a className=" bg-[#1E6ff5] text-white text-sm p-3 w-52 rounded-md flex  justify-center " href="#scroll">
                  Portfolio 
                </a>
   
         
              <Brochure />
            
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
