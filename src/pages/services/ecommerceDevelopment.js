import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import BreadCrumb from "../../components/common/BreadCrumb"
import Layout from "../../components/layout"
import Development from "../../components/Services/Development"

import Seo from "../../components/seo"

import Portfolios from "../../components/Portfolio/Portfolios"

import ServicesLayout from "../../components/ServicesLayout"
import ContactForm from "../../components/contact/ContactForm"
const EcommerceDevelopment = () => {
  const contactImage = "/img/services/ContactFormImage.svg"

  const query = useStaticQuery(ecommercData)
  const data =
    query.allMarkdownRemark.edges[0].node.frontmatter.services
      .ecommerceDevelopment

  const [ecommerc, setEcommerc] = useState([])
  useEffect(() => {
    setEcommerc(data)
  }, [data])

  return (
    <div>
      <Layout title={{ title: "Ecommerce Development" }}>
        <Seo title="E-commerce-Development" description="TrendSoftTech" />
        <BreadCrumb
          title="E-commerce Development"
          img="/img/BreadCrumb/EcommerceDevelopment.svg"
        />
        <ServicesLayout pdf={{ pdf: "/pdf/brochure-test.pdf" }}>
          <Development data={ecommerc} title="E-commerce Development" />
        </ServicesLayout>
        <Portfolios data={data} />
        <div className="xl:flex xl:justify-between xl:items-center mt-12  p-6 bg-blue-50 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
          <div className="bg-white shadow-md xl:w-[40%]  rounded-md p-5">
            <ContactForm />
          </div>
          <img src={contactImage} alt="image" width="700px" />
        </div>
      </Layout>
    </div>
  )
}

export default EcommerceDevelopment

const ecommercData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            services {
              ecommerceDevelopment {
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
