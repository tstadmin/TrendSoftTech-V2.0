import React from "react"
import Card from "../common/Card"

const ServicesProvide = props => {
  return (
    <div className="text-center mt-24 ">
      <div className="text-center mb-16">
        <p className="text-lg  text-blue-400 ">SERVICES</p>
        <p className="text-[36px] font-bold  ">Services we provide</p>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-5 px-12">
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
