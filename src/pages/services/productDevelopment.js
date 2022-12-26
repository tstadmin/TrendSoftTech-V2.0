import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

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
        <Development data={product} />
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
