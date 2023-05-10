import React from "react"

import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import { graphql, useStaticQuery } from "gatsby"
import Seo from "../../components/seo"
import Portfolios from "../../components/Portfolio/Portfolios"
import BreadCrumb from "../../components/common/BreadCrumb"

import ServicesLayout from "../../components/ServicesLayout"
import ContactForm from "../../components/contact/ContactForm"

const WebDevelopment = () => {
  const query = useStaticQuery(webDevelopmentData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services.webDevelopment

  const contactImage = "/img/services/ContactFormImage.svg"

  return (
    <div>
      <Layout title={{ title: "Web Development" }}>
        <Seo title="Web-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="Web Development"
          img="/img/BreadCrumb/WebDevelopment.svg"
        />
        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Development data={data} title="Web Development" />
        </ServicesLayout>

        <Portfolios data={data} />

        <div className="xl:flex xl:justify-between xl:items-center  p-6 bg-blue-50 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4 mt-12">
          <div className="bg-white shadow-md xl:w-[40%]  rounded-md p-5">
            <ContactForm />
          </div>
          <img src={contactImage} alt="image" width="700px" />
        </div>
      </Layout>
    </div>
  )
}

export default WebDevelopment

const webDevelopmentData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              webDevelopment {
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
