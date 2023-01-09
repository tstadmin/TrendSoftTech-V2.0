import { Link } from "gatsby"
import React from "react"
import { Description, Hyperlink } from "./CommonStyle"
const Card = props => {
  return (
    <li
      className={`${
        props.CTA
          ? "lg:flex grid border border-sky-300 max-w-[500px] 2xl:gap-8 gap-4 min-h-[300px] lg:justify-items-start justify-items-center rounded-lg"
          : "grid border border-sky-300 rounded-lg max-w-[530px]  min-h-[300px] justify-items-center"
      }
          ${
            props.CTA
              ? "hover:shadow-2xl  hover:border-sky-50 hover:duration-300 hover:cursor-pointer hover:shadow-blue-300"
              : "none"
          }
            lg:p-6 2xl:px-8   md:p-8 p-5 bg-white`}
    >
      <img src={props.img} className="w-[85px] h-[85px]" />

      <div
        className={`  ${
          props.CTA
            ? "lg:text-start text-center 2xl:space-y-4 md:space-y-3  space-y-5 "
            : "text-center"
        }    grid`}
      >
        <h2 className="text-[#0B70E1]">{props.title}</h2>

        <p>{props.description}</p>
        {props.CTA ? (
          <Hyperlink>
            <Link aria-label={props.label} to={props.page}>
              {props.CTA}
            </Link>
          </Hyperlink>
        ) : (
          ""
        )}
      </div>
    </li>
  )
}

export default Card
