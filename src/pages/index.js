import React, { useState, useEffect } from "react"
import BannerItems from "../components/home/BannerItems"

import ServicesProvide from "../components/home/ServicesProvide"
import WorkingProcess from "../components/home/WorkingProcess"
import AboutOurCompany from "../components/home/AboutOurCompany"

import Banner from "../components/home/Banner"

import ContactSupport from "../components/home/contactUs24x7/ContactSupport"

import Seo from "../components/seo"

import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import TopBar from "../components/common/TopBar"
import Carousel from "../components/home/Carousel"


const Index = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home
  const [banner, setBanner] = useState([])
  const [bannerItem, setBannerItem] = useState([])
  const [aboutOurCompany, setAboutOurCompany] = useState([])
  const [clients, setClients] = useState([])
  const [servicesProvide, setServicesProvide] = useState([])
 
  const [workingProcess, setWorkingProcess] = useState([])

  useEffect(() => {
    setBannerItem(data.bannerItems)
    setServicesProvide(data.servicesWeProvide)

    setBanner(data.banner)
    setAboutOurCompany(data.aboutOurCompany)
    setClients(data.clients)
    setWorkingProcess(data.workingProcess)
  }, [data])

  return (
    <div>
      <TopBar description="Wishing you all a very Happy Maha shivratri 2023!" />
      <Layout  title={{title:"Home"}}>
        <div id="content" role="main">
          <Seo title="Home" description="TrendSoftTech" />
          {/* <Helmet>
          <title>Home | TrendSoftTech </title>
          <meta name="description" content="Home | TrendSoftTech" />
        </Helmet> */}
        <Carousel/>
          {/* <Banner banner={banner} /> */}
          <AboutOurCompany aboutOurCompany={aboutOurCompany} />
          <BannerItems bannerItem={bannerItem} />
          <ServicesProvide servicesProvide={servicesProvide} />
          {/* <AccessibilityServices
            accessibilityServices={accessibilityServices}
          /> */}
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
              banner {
                headers
                image
                alt
                title
                CTA
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
              accessibilityServices {
                title
                list {
                  listItem {
                    id
                    img
                    alt
                    title
                    page
                    description
                  }
                }
              }
              clients {
                list {
                  listItem {
                    id
                    img
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
