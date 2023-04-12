import { Link } from "gatsby"
import React from "react"
// import { PhotoProvider, PhotoView } from "react-photo-view"
import { FiArrowUpRight } from "react-icons/fi"
import "react-photo-view/dist/react-photo-view.css"
import { AwardHeading, AwardDiv } from "./AwardStyled"
const Awards = props => {
  return (
    <div>
      <div className="px-2">
        <AwardHeading>{props.title}</AwardHeading>
        <AwardDiv>
          {props.data.list.map((item, idx) => (
            <li key={item.listItem.id}>
              <a
                href={item.listItem.pdf}
                target="_blank"
                aria-label={item.listItem.label}
                className="bg-[#0b2d78] text-white sm:text-[16px] gap-2 text-sm p-4 rounded-md flex  justify-center hover:text-[#f9761f] focus:text-[#f9761f]  hover:underline focus:decoration-[#f9761f]  hover:decoration-[#f9761f] "
              >
                {/* <button> */}
                {item.listItem.title} <FiArrowUpRight />
                {/* </button> */}
                {/* <p>{item.listItem.title}</p> */}
              </a>
            </li>
          ))}
        </AwardDiv>
      </div>
    </div>
  )
}

export default Awards
