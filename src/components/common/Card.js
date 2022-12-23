import React from "react"
import tw from "twin.macro"
import { Description } from "./CommonStyle"
const Card = props => {
  return (
    <div>
      <div>
        <div
          className={`${
            props.CTA
              ? "lg:flex grid border border-sky-300  max-w-[530px] gap-5 min-h-[300px] lg:justify-items-start justify-items-center rounded-lg"
              : "grid border border-sky-300 rounded-lg max-w-[530px]  min-h-[300px] justify-items-center"
          }
          ${
            props.CTA
              ? "hover:shadow-2xl  hover:border-sky-50 hover:duration-300 hover:cursor-pointer hover:shadow-blue-300"
              : "none"
          }
          2xl:p-5 xl:p-5 lg:p-7 md:p-6 sm:p-3 540Screen:p-7 440Screen:p-8 340Screen:p-5 p-5 bg-white`}
        >
          <img src={props.img} className="w-[85px] h-[85px]" />

          <div
            className={`  ${
              props.CTA ? "lg:text-start text-center " : "text-center"
            }  ${props.access ? "text-start " : "text-center"}  grid`}
          >
            <p className="2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg 540Screen:text-xl  440Screen:text-xl 340Screen:text-xl text-lg font-semibold">
              {props.title}
            </p>

            <Description>{props.description}</Description>
            {props.CTA ? (
              <Description className="">{props.CTA}</Description>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
