import React from "react"
import Card from "../common/Card"

const AccessibilityServices = props => {
  return (
    <div>
      <div className="text-center mb-16 mt-24">
        <p className="text-lg  text-blue-400 ">OUR</p>
        <p className="text-[36px] font-bold  ">Accessibility Services</p>
      </div>

      <div className="xl:flex md:grid gap-7  px-12  ">
        {props.accessibilityServices.map((item, id) => (
          <div className="flex space-x-11 shadow-2xl xl:min-w-[600px] sm:min-w- min-h-[170px] lg:min-w-[480px] p-7  shadow-blue-100 hover:shadow-none  hover:bg-blue-50">
            <img src={item.listItem.img} className="w-[85px] h-[85px]" />
            <div className="grid">
              <p className="text-3xl font-semibold">{item.listItem.title}</p>

              <p className="text-lg font-normal">{item.listItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccessibilityServices
