import React, { useState, useEffect } from "react"
import BannerItems from "../components/home/BannerItems"

import ServicesProvide from "../components/home/ServicesProvide"
import WorkingProcess from "../components/home/WorkingProcess"
import AboutOurCompany from "../components/home/AboutOurCompany"

import ContactSupport from "../components/home/contactUs24x7/ContactSupport"

import Seo from "../components/seo"

import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import Carousel from "../components/home/Carousel"
import AboutBrochure from "../components/common/AboutBrochure"

const Index = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home
  const [carousel, setCarousel] = useState([])
  const [bannerItem, setBannerItem] = useState([])
  const [aboutOurCompany, setAboutOurCompany] = useState([])
  const [clients, setClients] = useState([])
  const [servicesProvide, setServicesProvide] = useState([])

  const [workingProcess, setWorkingProcess] = useState([])

  useEffect(() => {
    setBannerItem(data.bannerItems)
    setServicesProvide(data.servicesWeProvide)

    setCarousel(data.carousel)
    setAboutOurCompany(data.aboutOurCompany)
    setClients(data.clients)
    setWorkingProcess(data.workingProcess)
  }, [data])

  return (
    <div>
      <Layout
        title={{ title: "Wishing you all a very Happy Maha shivratri 2023!" }}
      >
        <div id="content" role="main">
          <Seo title="Home" description="TrendSoftTech" />

          <Carousel carousel={carousel} />

          <AboutOurCompany aboutOurCompany={aboutOurCompany} />
          {/* <AboutBrochure /> */}
          <BannerItems bannerItem={bannerItem} />
          <ServicesProvide servicesProvide={servicesProvide} />

          <ContactSupport clients={clients} />
          <WorkingProcess workingProcess={workingProcess} />
        </div>
      </Layout>
    </div>
  )
}

export default Index

const dataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home {
              carousel {
                list {
                  listItem {
                    id
                    title
                    img
                    label
                    page
                    slidescount
                    CTA
                    hidden
                  }
                }
              }
              bannerItems {
                card {
                  id
                  img
                  alt
                  title
                  description
                }
              }
              aboutOurCompany {
                img
                header

                description
                CTA
              }
              servicesWeProvide {
                list {
                  listItem {
                    id
                    title
                    description
                    img
                    label
                    page
                    CTA
                  }
                }
                subTitle
              }
              clients {
                list {
                  listItem {
                    id
                    img
                    label
                  }
                }
              }
              workingProcess {
                title
                description
                CTA
                list {
                  listItem {
                    id
                    num
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
`
