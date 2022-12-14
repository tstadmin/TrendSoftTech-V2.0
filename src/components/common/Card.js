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
          ${props.CTA ? "  max-w-[387px] " : "max-w-[350px]  "}
          ${props.CTA ? "  gap-5 " : "none"}
          ${props.access ? "max-w-[571px]" : "none"}
          ${props.access ? " min-h-[174px]" : " min-h-[252px] "}
          ${props.access ? " min-h-[174px]" : " min-h-[282px] "}
          ${props.access ? " flex" : " none"}
          ${props.access ? "justify-items-start" : "justify-items-center"}
         
          ${props.num ? "justify-items-start" : "none"}
          p-5 
          `}
        >
          {props.img ? (
            <img src={props.img} className="w-[77px] h-[75px]" />
          ) : (
            ""
          )}
          {props.num ? <p className="text-[50px]">{props.num}</p> : ""}

          <div
            className={`  ${props.CTA ? "text-start " : "text-center"}  ${
              props.access ? "text-start " : "text-center"
            }  grid`}
          >
            {props.title ? (
              <p className="text-2xl font-semibold">{props.title}</p>
            ) : (
              ""
            )}

            {props.access ? (
              <p className="text-2xl font-semibold">{props.access}</p>
            ) : (
              ""
            )}
            <p className="text-sm font-normal">{props.description}</p>
            {props.CTA ? (
              <p className="text-sm font-normal ">{props.CTA}</p>
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
