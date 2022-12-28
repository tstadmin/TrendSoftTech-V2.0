import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import Tabs from "../../components/services/Tabs"
import ServicesLayout from "../../components/ServicesLayout"

import EcommerceDevelopmentImg from "../../../static/img/services/Ecommerce_Development.svg"
import Seo from "../../components/seo"

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
          img={EcommerceDevelopmentImg}
        />
        <Tabs />
        <ServicesLayout>
          <Development data={ecommerc} />
        </ServicesLayout>
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
              }
            }
          }
        }
      }
    }
  }
`
