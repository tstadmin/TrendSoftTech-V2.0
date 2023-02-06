import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import Accessible from "../../../components/Services/Accessible"
import { graphql, useStaticQuery } from "gatsby"
import ServicesLayout from "../../../components/ServicesLayout"
import BreadCrumb from "../../../components/common/BreadCrumb"

import Seo from "../../../components/seo"
import Tabs from "../../../components/services/Tabs"
const AccessiblePDFForms = () => {
  const query = useStaticQuery(accessibleFormQuery)
  const [accessibleForm, setAccessibleForm] = useState([])
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.accessible
      .accessiblePDFForms
  useEffect(() => {
    setAccessibleForm(data)
  }, [data])

  return (
    <div>
      <Layout title={{title:"Accessible PDF Form"}}>
        <Seo title="Accessibility-PDFForms" description="TrendSoftTech" />
        <BreadCrumb
          img="/img/BreadCrumb/docaccessibility.svg"
          title="Accessible PDF Form"
        />

        <ServicesLayout>
          <Accessible data={accessibleForm}   title="Accessible PDF Form" />
        </ServicesLayout>
        <Tabs />
      </Layout>
    </div>
  )
}

export default AccessiblePDFForms

const accessibleFormQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accessible {
              accessiblePDFForms {
                description
                list {
                  listItems {
                    id
                    title
                    description
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
