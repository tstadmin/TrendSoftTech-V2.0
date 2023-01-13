import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { GrowBusinnes } from "./CommonStyle"
const GrowYourBusinnes = () => {
  const query = useStaticQuery(GrowYourData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.Grow
  return (
    <div className="mt-28 ">
      <GrowBusinnes>
        <h2>{data.description}</h2>
        <div>
          <Link
            to="/contact/"
            className=" text-sm  hover:bg-white border-2 bg-[#1E6ff5] hover:border-[#f37c05]   hover:duration-700  text-white hover:text-blue-500   bg-blue-500 font-semibold duration-75 p-3 rounded-md"
          >
            {data.button}
          </Link>
        </div>
      </GrowBusinnes>
    </div>
  )
}

export default GrowYourBusinnes

const GrowYourData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            Grow {
              description
              button
            }
          }
        }
      }
    }
  }
`
