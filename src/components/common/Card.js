import { Link } from "gatsby"
import React from "react"
import { Hyperlink } from "./CommonStyle"
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
              : "shadow-2xl shadow-blue-400/30  hover:border-sky-100 hover:scale-105 hover:duration-700 hover:cursor-pointer"
          }
            lg:p-6 2xl:px-8 md:p-8 p-5 bg-white `}
    >
      <img src={props.img} className="w-[60px] h-[60px]" alt="" />

      <div
        className={`  ${
          props.CTA
            ? "lg:text-start text-center 2xl:space-y-4 md:space-y-3  space-y-5 "
            : "text-center"
        }    grid`}
      >
        <h3 className="text-[#0B70E1]">{props.title}</h3>

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
