import React, { useState, useEffect } from "react"
import BannerItems from "../components/home/BannerItems"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import ServicesProvide from "../components/home/ServicesProvide"
import Navbar from "../components/home/navbar"
import AccessibilityServices from "../components/home/AccessibilityServices"
import WorkingProcess from "../components/home/WorkingProcess"
import AboutOurCompany from "../components/home/AboutOurCompany"
import Footer from "../components/home/Footer"

const Index = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.home
  const [banner, setBanner] = useState([])
  const [bannerItem, setBannerItem] = useState([])
  const [aboutOurCompany, setAboutOurCompany] = useState([])
  const [contactUs24x7, setContactUs24x7] = useState([])
  const [servicesProvide, setServicesProvide] = useState([])
  const [accessibilityServices, setAccessibilityServices] = useState([])
  const [workingProcess, setWorkingProcess] = useState([])
  const [footer, setFooter] = useState([])
  useEffect(() => {
    setBannerItem(data.bannerItems)
    setServicesProvide(data.servicesWeProvide.list)
    setAccessibilityServices(data.accessibilityServices.list)
    setBanner(data.banner)
    setAboutOurCompany(data.aboutOurCompany)
    setContactUs24x7(data.contactUs24x7)
    setWorkingProcess(data.workingProcess.list)
    setFooter(data.footer)
  })

  console.log(servicesProvide)
  return (
    <div>
      {/* <Navbar />
      <BannerItems bannerItem={bannerItem} />
      <ServicesProvide servicesProvide={servicesProvide} />
      <AccessibilityServices accessibilityServices={accessibilityServices} />
      <WorkingProcess workingProcess={workingProcess} /> */}
      {/* <AboutOurCompany aboutOurCompany={aboutOurCompany} /> */}
      <Footer img={data.img} />
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
                title
                CTA
              }
              bannerItems {
                card {
                  id
                  img
                  title
                  description
                }
              }
              aboutOurCompany {
                img
                imgDot
                header
                title
                description
                CTA
              }
              servicesWeProvide {
                title
                subTitle
                list {
                  listItem {
                    id
                    img
                    title
                    page
                    description
                    CTA
                  }
                }
              }
              accessibilityServices {
                list {
                  listItem {
                    id
                    img
                    access
                    page
                    description
                  }
                }
              }
              contactUs24x7 {
                title
                personsImage
                description
                CTA
              }
              workingProcess {
                title
                text
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
              footer {
                img
              }
            }
          }
        }
      }
    }
  }
`
