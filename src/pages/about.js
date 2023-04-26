import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import AboutUs from "../components/About/AboutUs"
import ChooseUs from "../components/About/ChooseUs"
import OurVision from "../components/About/OurVision"
import BreadCrumb from "../components/common/BreadCrumb"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const query = useStaticQuery(dataQuery)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.about
  const [about, setAbout] = useState([])
  useEffect(() => {
    setAbout(data)
  }, [data])

  return (
    <div>
      <Layout title={{ title: "About Us" }}>
        <div>
          <Seo title="About" description="TrendSoftTech" />
          <BreadCrumb img="/img/BreadCrumb/AboutFrame.svg" title="About" />
          <div id="mainContent">
            <div id="content" role="main">
              <AboutUs data={about} />
              <OurVision data={about} />
              <ChooseUs data={about} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About

const dataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            about {
              aboutimg
              altAbout
              Visionimg
              altVision
              chooseimg
              altChoose
              aboutUs
              aboutUsDescription
              ourMission
              ourMissionDescription
              ourVision
              ourVisionDescription
              whychoose
              whychooseDescription
            }
          }
        }
      }
    }
  }
`
