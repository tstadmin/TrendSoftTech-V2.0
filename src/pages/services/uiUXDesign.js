import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"

import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import Seo from "../../components/seo"
import BreadCrumb from "../../components/common/BreadCrumb"
import Portfolios from "../../components/Portfolio/Portfolios"

import ServicesLayout from "../../components/ServicesLayout"
const UiUXDesign = () => {
  const query = useStaticQuery(UiUXDesignData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.uiUXDesign

  const [design, setDesign] = useState([])
  useEffect(() => {
    setDesign(data)
  }, [data])

  return (
    <div>
      <Layout title={{ title: "UI / UX Design" }}>
        <Seo title="UI/UX Design" description="TrendSoftTech" />
        <BreadCrumb
          title="UI / UX Design"
          img="/img/BreadCrumb/UiUXDesign.svg"
        />
        <ServicesLayout>
          {" "}
          <Development data={design} title="UI / UX Design" />
        </ServicesLayout>
        <Portfolios data={data} />
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
