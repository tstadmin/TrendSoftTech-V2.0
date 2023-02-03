import React, { useState, useEffect } from "react"
import Accessible from "../../../components/Services/Accessible"
import Layout from "../../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"

import Seo from "../../../components/seo"
import Tabs from "../../../components/services/Tabs"
import TopBar from "../../../components/common/TopBar"
const AccessibleExcel = () => {
  const query = useStaticQuery(AccessibleData)
  const [accessibleExcel, setAccessibleExcel] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible.accessibleExcel
  useEffect(() => {
    setAccessibleExcel(data)
  }, [data])
  return (
    <div>
      <TopBar description="Accessibility-Excel" />
      <Layout title={{title:"Accessible Excel"}}>
       <Seo title="Accessibility-Excel" description="TrendSoftTech" />
        <BreadCrumb
          img="/img/BreadCrumb/docaccessibility.svg"
          title="Accessible Excel"
        />

        <ServicesLayout>
          <Accessible data={accessibleExcel} />
        </ServicesLayout>
        <Tabs /> 
      </Layout>
    </div>
  )
}

export default AccessibleExcel

const AccessibleData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessibleExcel {
                description
                list {
                  listItems {
                    id
                    title
                    description
                    data
                    list {
                      listItems {
                        id
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
