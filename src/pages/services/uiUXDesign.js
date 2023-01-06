import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import ServicesLayout from "../../components/ServicesLayout"

import Seo from "../../components/seo"

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
      <Layout>
        <Seo title="UI/UX Design" description="TrendSoftTech" />
        <BreadCrumb title="UiUX Design" img="/img/BreadCrumb/UiUXDesign.svg" />
        {/* <Tabs /> */}
        <ServicesLayout>
          <Development data={design} />
        </ServicesLayout>
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
              }
            }
          }
        }
      }
    }
  }
`
