import React from "react"
import Card from "../common/Card"

const AccessibilityServices = props => {
  return (
    <div>
      <div className="text-center mb-16 mt-24">
        <p className="text-lg  text-blue-400 ">OUR</p>
        <p className="text-[36px] font-bold  ">Accessibility Services</p>
      </div>
      <div className="md:grid-cols-2 gap-5 sm:grid ">
        {props.accessibilityServices.map((item, id) => (
          <Card
            img={item.listItem.img}
            key={id}
            description={item.listItem.description}
            CTA={item.listItem.CTA}
            access={item.listItem.access}
          />
        ))}
      </div>
    </div>
  )
}

export default AccessibilityServices
