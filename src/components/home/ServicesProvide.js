import React from "react"
import Card from "../common/Card"

const ServicesProvide = props => {
  //   console.log(props)
  return (
    <div>
      <div className="md:grid-cols-3 sm:grid gap-5 justify-center">
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
