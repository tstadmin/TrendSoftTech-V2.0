import React from "react"

const Card = props => {
  return (
    <div>
      <div className="">
        <div
          className={`
          ${props.CTA ? "flex" : "grid"}
          ${props.CTA ? "none" : " rounded-xl"}
          ${props.CTA ? "none" : " shadow-blue-400"}
          ${props.CTA ? "hover:shadow-2xl" : "none"}
          ${props.CTA ? "border border-sky-200" : "none"}
          ${props.CTA ? "hover:border-sky-50" : "none"}
          ${props.CTA ? "hover:shadow-blue-300" : " shadow-md "}
          ${props.CTA ? "  max-w-[530px] " : "max-w-[530px]  "}
          ${props.CTA ? "  gap-5 " : "none"}
          ${props.CTA ? " min-h-[300px]" : " min-h-[300px] "}
          ${props.CTA ? "justify-items-start" : "justify-items-center"}
          2xl:p-8 xl:p-5 lg:p-7 md:p-6 sm:p-3 540Screen:p-7 440Screen:p-8 340Screen:p-5 p-5 bg-white
          `}
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

            <p className=" text-lg font-normal">{props.description}</p>
            {props.CTA ? (
              <p className="text-lg font-normal ">{props.CTA}</p>
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
