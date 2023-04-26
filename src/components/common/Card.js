import { Link } from "gatsby"
import React from "react"
import { Hyperlink } from "./CommonStyle"
const Card = props => {
  return (
    <li
      className={`${
        props.CTA
          ? "lg:flex grid  max-w-[500px] 2xl:gap-8 gap-4 min-h-[220px] lg:justify-items-start justify-items-center rounded-lg"
          : "grid  rounded-lg max-w-[530px]  min-h-[250px] justify-items-center"
      }
          ${props.CTA ? "" : "shadow-2xl shadow-blue-400/30  "}
            lg:p-6 2xl:px-8 md:p-8 p-5 bg-white border border-[#377bf1]`}
    >
      <img src={props.img} className="w-[60px] h-[60px]" alt="" />

      <div
        className={`  ${
          props.CTA
            ? "lg:text-start text-center 2xl:space-y-4 md:space-y-3  space-y-5 "
            : "text-center"
        }    grid`}
      >
        {props.titles ? (
          <h2 className="md:text-lg  text-[18px]  font-semibold text-[#0b6ddc]">
            {props.titles}
          </h2>
        ) : (
          <h3 className="text-[#0b6ddc]">{props.title}</h3>
        )}

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
