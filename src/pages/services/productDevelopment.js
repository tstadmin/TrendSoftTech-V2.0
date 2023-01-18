import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import ServicesLayout from "../../components/ServicesLayout"

import Seo from "../../components/seo"
import TopBar from "../../components/common/TopBar"

const ProductDevelopment = () => {
  const query = useStaticQuery(productData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services
      .productDevelopment

  const [product, setproduct] = useState([])
  useEffect(() => {
    setproduct(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <TopBar />
      <Layout>
        <Seo title="Product-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Product Development"
          img="/img/BreadCrumb/ProductDevelopment.svg"
        />
        {/* <Tabs /> */}
        <ServicesLayout>
          <Development data={product} />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default ProductDevelopment

const productData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              productDevelopment {
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
