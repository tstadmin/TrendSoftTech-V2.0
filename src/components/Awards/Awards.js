import { Link } from "gatsby"
import React from "react"
// import { PhotoProvider, PhotoView } from "react-photo-view"
import { FiArrowUpRight } from "react-icons/fi"
import "react-photo-view/dist/react-photo-view.css"
import { AwardHeading, AwardDiv } from "./AwardStyled"
const Awards = props => {
  return (
    <div id="mainContent">
      <div className="px-2" id="content" role="main">
        <div>
          <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] mt-4  font-semibold text-[#B8000C]">
            Certifications
          </h1>
        </div>
        <AwardDiv>
          {props.data.list.map((item, idx) => (
            <li key={item.listItem.id}>
              <a
                href={item.listItem.pdf}
                target="_blank"
                aria-label={item.listItem.label}
                className="bg-[#0b2d78]  text-white sm:text-[16px] gap-2 text-sm p-4 rounded-md flex  justify-center hover:text-[#F9761F] focus:text-[#F9761F]   hover:underline focus:decoration-[#f9761f]  hover:decoration-[#f9761f] "
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
