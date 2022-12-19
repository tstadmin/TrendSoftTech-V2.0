import React from "react"
import tw from "twin.macro"
const Card = props => {
  const Description = tw.p`text-lg font-normal`
  return (
    <div>
      <div>
        <div
          className={`${
            props.CTA
              ? "flex border border-sky-300 max-w-[530px]gap-5 min-h-[300px] justify-items-start"
              : "grid  shadow-md shadow-blue-400 max-w-[530px]  min-h-[300px] justify-items-center"
          }
          ${
            props.CTA
              ? "hover:shadow-2xl border-sky-50 duration-1000 cursor-pointer shadow-blue-300"
              : "none"
          }
          2xl:p-5 xl:p-5 lg:p-7 md:p-6 sm:p-3 540Screen:p-7 440Screen:p-8 340Screen:p-5 p-5 bg-white`}
          // className={`
          // ${props.CTA ? "flex" : "grid"}

          // ${props.CTA ? "none" : " shadow-blue-400"}
          // ${props.CTA ? "hover:shadow-2xl" : "none"}
          // ${props.CTA ? "border border-sky-200" : "none"}
          // ${
          //   props.CTA
          //     ? "hover:border-sky-50 duration-1000 cursor-pointer"
          //     : "none"
          // }
          // ${props.CTA ? "hover:shadow-blue-300" : " shadow-md "}
          // ${props.CTA ? "  max-w-[530px] " : "max-w-[530px]  "}
          // ${props.CTA ? "  gap-5 " : "none"}
          // ${props.CTA ? " min-h-[300px]" : " min-h-[300px] "}
          // ${props.CTA ? "justify-items-start" : "justify-items-center"}
          // 2xl:p-5 xl:p-5 lg:p-7 md:p-6 sm:p-3 540Screen:p-7 440Screen:p-8 340Screen:p-5 p-5 bg-white
          // `}
        >
          <img src={props.img} className="w-[85px] h-[85px]" />

          <div
            className={`  ${props.CTA ? "text-start " : "text-center"}  ${
              props.access ? "text-start " : "text-center"
            }  grid`}
          >
            <p className="2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg 540Screen:text-xl  440Screen:text-xl 340Screen:text-xl text-lg font-semibold">
              {props.title}
            </p>

            <Description>{props.description}</Description>
            {props.CTA ? <Description>{props.CTA}</Description> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
