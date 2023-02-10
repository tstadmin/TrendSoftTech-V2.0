import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import BreadCrumb from "../components/common/BreadCrumb"
import Layout from "../components/layout"
import ContactIndex from "../components/contact/ContactIndex"
import Seo from "../components/seo"

const Contact = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.contact
  const [contact, setContact] = useState([])
  useEffect(() => {
    setContact(data)
  }, [data])

  return (
    <div>
     
      <Layout  title={{ title:"service@trendsofttech.com   info@trendsofttech.com"}} >
        <Seo title="Contact " description="TrendSoftTech" />
        <BreadCrumb title="Contact Us" img="/img/BreadCrumb/careersFrame.svg" />
        <ContactIndex data={contact}   title="Contact"/>
      </Layout>
    </div>
  )
}

export default Contact

const dataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            contact {
              emailimg
              altEmail
              addressimg
              altAddress
              addressOne
              addressOneInfo
              addressTwo
              addressTwoInfo
              businessEmail
              businessMailTitle
              email
              emailTitle
              title
            }
          }
        }
      }
    }
  }
`
