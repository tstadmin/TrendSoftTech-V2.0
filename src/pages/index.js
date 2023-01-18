import React, { useState, useEffect } from "react"
import BannerItems from "../components/home/BannerItems"

import ServicesProvide from "../components/home/ServicesProvide"
import AccessibilityServices from "../components/home/AccessibilityServices"
import WorkingProcess from "../components/home/WorkingProcess"
import AboutOurCompany from "../components/home/AboutOurCompany"

import Banner from "../components/home/Banner"

import ContactSupport from "../components/home/contactUs24x7/ContactSupport"

import Seo from "../components/seo"

import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import TopBar from "../components/common/TopBar"

const Index = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home
  const [banner, setBanner] = useState([])
  const [bannerItem, setBannerItem] = useState([])
  const [aboutOurCompany, setAboutOurCompany] = useState([])
  const [contactUs, setContactUs] = useState([])
  const [servicesProvide, setServicesProvide] = useState([])
  const [accessibilityServices, setAccessibilityServices] = useState([])
  const [workingProcess, setWorkingProcess] = useState([])

  useEffect(() => {
    setBannerItem(data.bannerItems)
    setServicesProvide(data.servicesWeProvide)
    setAccessibilityServices(data.accessibilityServices)
    setBanner(data.banner)
    setAboutOurCompany(data.aboutOurCompany)
    setContactUs(data.contactUs24x7)
    setWorkingProcess(data.workingProcess)
  }, [data])

  return (
    <div>
      <TopBar description="74th Republic Day of India 2023" />
      <Layout>
        <div id="content" role="main">
          <Seo title="Home" description="TrendSoftTech" />
          {/* <Helmet>
          <title>Home | TrendSoftTech </title>
          <meta name="description" content="Home | TrendSoftTech" />
        </Helmet> */}
          <Banner banner={banner} />
          <AboutOurCompany aboutOurCompany={aboutOurCompany} />
          <BannerItems bannerItem={bannerItem} />
          <ServicesProvide servicesProvide={servicesProvide} />
          <AccessibilityServices
            accessibilityServices={accessibilityServices}
          />
          <ContactSupport contactUs={contactUs} />
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
                subTitle
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
              contactUs24x7 {
                title
                personsImage
                alt
                description
                CTA
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
