import React from "react"
import Card from "../common/Card"

const ServicesProvide = props => {
  // console.log(props)
  return (
    <div className="text-center ">
      <div className="text-center ">
        <p className="text-lg  text-blue-400 ">SERVICES</p>
        <p className="text-[36px] font-bold  ">Services we provide</p>
      </div>
      <div className="2xl:grid-cols-3 md:grid-cols-2 sm:grid gap-5 justify-items-center ">
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
