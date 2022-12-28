import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Development from "../../components/Services/Development"
import Tabs from "../../components/services/Tabs"
import ServicesLayout from "../../components/ServicesLayout"

const DigitalMarketing = () => {
  const query = useStaticQuery(DigitalData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.digitalMarketing

  const [digital, setDigital] = useState([])
  useEffect(() => {
    setDigital(data)
  }, [data])
  console.log(data)

  return (
    <div>
      <Layout>
        <Seo title="Digital-Marketing" description="TrendSoftTech" />
        <BreadCrumb />
        <Tabs />
        <ServicesLayout>
          <Development data={digital} />
        </ServicesLayout>
      </Layout>
    </div>
  )
}

export default DigitalMarketing

const DigitalData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              digitalMarketing {
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
