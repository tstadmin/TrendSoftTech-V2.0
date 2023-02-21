import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import Seo from "../../components/seo"

import Portfolios from "../../components/Portfolio/Portfolios"

import ServicesLayout from "../../components/ServicesLayout"
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
      <Layout title={{ title: "Ecommerce Development" }}>
        <Seo title="Ecommerce-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Ecommerce Development"
          img="/img/BreadCrumb/EcommerceDevelopment.svg"
        />
        <ServicesLayout>
          <Development data={ecommerc} title="Ecommerce Development" />
        </ServicesLayout>
        <Portfolios data={data} />
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
