import React from "react"

const Card = props => {
  return (
    <div>
      <div className="">
        <div
          className="
        max-w-[350px] 
        min-h-[282px] 
        p-5 
        shadow-md 
        shadow-blue-400 
       grid
        justify-items-center 
        rounded-xl  ${props.CTA ? 'flex' : 'grid'}"
        >
          <img src={props.img} className="w-[77px] h-[75px]" />
          <div className="text-center grid">
            <p className="text-2xl font-semibold">{props.title}</p>
            <p className="text-sm font-normal">{props.description}</p>
            <p className="text-sm font-normal ">{props.CTA}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
