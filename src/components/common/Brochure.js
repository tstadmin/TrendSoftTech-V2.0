import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BrochureDiv } from "./CommonStyle"

const Brochure = props => {
  console.log(props.pdf.pdf)
  const query = useStaticQuery(BrochureData)
  const data = query.allMarkdownRemark.edges[0].node.frontmatter.Brochure
  return (
    <BrochureDiv>
      <p className=" font-semibold text-xl mt-1">{data.description}</p>
      <a
        href={props.pdf.pdf}
        target="_blank"
        aria-label="Download company brochure PDF  "
        className="bg-[#0b2d78] hover:text-[#f9761f] focus:text-[#f9761f]  text-white text-sm p-2 rounded-md flex  justify-center"
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
