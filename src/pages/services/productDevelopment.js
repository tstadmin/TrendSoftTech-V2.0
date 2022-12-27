import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"
import Tabs from "../../components/services/Tabs"
import ServicesLayout from "../../components/ServicesLayout"

import ProductDevelopmentImg from "../../../static/img/services/Product_Development.svg"

const ProductDevelopment = () => {
  const query = useStaticQuery(productData)
  const data =
    query.allMarkdownRemark.edges[2].node.frontmatter.services
      .productDevelopment

  const [product, setproduct] = useState([])
  useEffect(() => {
    setproduct(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <Layout>
        <BreadCrumb title="Product Development" img={ProductDevelopmentImg} />
        <Tabs />
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
