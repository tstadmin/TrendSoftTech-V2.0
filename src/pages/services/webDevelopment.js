import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import Tabs from "../../components/services/Tabs"
import ServicesLayout from "../../components/ServicesLayout"

import WedDevelopmentImg from "../../../static/img/services/WebDevelopment.svg"
import { graphql, useStaticQuery } from "gatsby"
const WebDevelopment = () => {
  const query = useStaticQuery(webDevelopmentData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.webDevelopment

  const [webDevelopment, setWebDevelopment] = useState([])
  useEffect(() => {
    setWebDevelopment(data)
  }, [data])
  console.log(data)
  return (
    <div>
      <Layout>
        <BreadCrumb title="Web Development" img={WedDevelopmentImg} />
        {/* <Tabs /> */}
        <ServicesLayout>
          <Development data={data} />
        </ServicesLayout>
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
              }
            }
          }
        }
      }
    }
  }
`
