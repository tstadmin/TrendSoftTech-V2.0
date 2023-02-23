import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BrochureDiv } from "./CommonStyle"

const Brochure = () => {
  const query = useStaticQuery(BrochureData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.Brochure
  return (
    <BrochureDiv>
      <p className=" font-semibold text-xl mt-1">{data.description}</p>
      <a
        href="/pdf/brochure-test.pdf"
        target="_blank"
        aria-label=" company brochure PDF "
        className="bg-[#0b2d78] text-white text-sm p-2 rounded-md flex  justify-center"
      >
        {data.button}
      </a>
    </BrochureDiv>
  )
}

export default Brochure

const BrochureData = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            Brochure {
              description
              button
            }
          }
        }
      }
    }
  }
`
