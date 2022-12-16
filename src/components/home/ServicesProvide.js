import React from "react"
import Card from "../common/Card"

const ServicesProvide = props => {
  return (
    <div className="text-center mt-24 ">
      <div className="text-center mb-16">
        <p className="text-lg  text-blue-400 ">SERVICES</p>
        <p className="text-[36px] font-bold  ">Services we provide</p>
      </div>
      <div
        className="2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 
        sm:grid sm:grid-cols-1 540Screen:grid 540Screen:grid-cols-1 grid grid-cols-1 
         440Screen:grid 440Screen:grid-cols-1 340Screen:grid 340Screen:grid-cols-1 place-items-center
         2xl:gap-5 xl:gap-5 540Screen:gap-5
       440Screen:gap-5 340Screen:gap-4 gap-3 justify-items-center
         2xl:px-48 xl:px-28 lg:px-11 sm:px-7 540Screen:px-8 440Screen:px-6 340Screen:px-3 px-2"
      >
        {props.servicesProvide.map((item, id) => (
          <Card
            img={item.listItem.img}
            key={id}
            title={item.listItem.title}
            description={item.listItem.description}
            CTA={item.listItem.CTA}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesProvide
