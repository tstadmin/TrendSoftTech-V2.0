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
  },[data])

  return (
    <Layout>
      <Seo title="Contact" description="TrendSoftTech" />
      <BreadCrumb title="Contact" img="/img/contact/contact_Frame.svg" />
      <ContactIndex data={contact} />
    </Layout>
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
              addressimg
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
