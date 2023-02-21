import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Development from "../../components/Services/Development"

import ServicesLayout from "../../components/ServicesLayout"

const DigitalMarketing = () => {
  const query = useStaticQuery(DigitalData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.digitalMarketing

  const [digital, setDigital] = useState([])
  useEffect(() => {
    setDigital(data)
  }, [data])

  return (
    <div>
      <Layout title={{ title: "Digital Marketing" }}>
        <Seo title="Digital-Marketing" description="TrendSoftTech" />
        <BreadCrumb
          title="Digital Marketing"
          img="/img/BreadCrumb/digitalmarketing.svg"
        />

        <ServicesLayout>
          <Development data={digital} title="Digital Marketing" />
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
