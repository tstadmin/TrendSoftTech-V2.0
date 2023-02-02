import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BrochureDiv } from "./CommonStyle"
const Brochure = () => {
  const query = useStaticQuery(BrochureData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.Brochure
  return (
    <BrochureDiv>
      {/* <h2 className="text-4xl">Brochure</h2> */}
      <p className=" font-semibold">{data.description}</p>

      <a
        href="/pdf/brochure.pdf"
        target="_blank"
        aria-label=" company brochure PDF "
        className="bg-[#1E6ff5] text-white text-sm p-2 rounded-md flex  justify-center"
      >
        {data.button}
        {/* <AiOutlineFilePdf className="text-white ml-1 text-lg" role="button" /> */}
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
