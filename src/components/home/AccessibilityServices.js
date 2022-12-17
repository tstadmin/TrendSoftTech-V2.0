import React from "react"

import Card from "../common/Card"

const AccessibilityServices = props => {
  return (
    <div data-sal="fade" data-sal-delay="100" data-sal-easing="ease-in-out">
      <div className="text-center mb-16 mt-24">
        <p className="text-lg  text-blue-400 ">OUR</p>
        <p className="text-[36px] font-bold  ">Accessibility Services</p>
      </div>

      <div className="lg:flex lg:justify-items-center  md:grid gap-7   2xl:px-48 xl:px-32 lg:px-16 md:px-8 px-12 340Screen:px-5  ">
        {props.accessibilityServices.map((item, id) => (
          <div
            key={id}
            className="flex xl:space-x-11 md:space-x-11  440Screen:space-x-5  340Screen:space-x-5 space-x-4 shadow-2xl   xl:min-w-[500px] sm:min-w- min-h-[170px] lg:min-w-[460px]  p-7  shadow-blue-100 hover:shadow-none duration-1000 cursor-pointer   hover:bg-blue-50"
          >
            <img
              src={item.listItem.img}
              className="2xl:w-[85px] lg:w-[85px] md:w-[85px] 340Screen:w-[55px] w-[50px] 2xl:h-[85px] lg:h-[85px] md:h-[85px] 340Screen:h-[55px] h-[55px] "
            />
            <div className="grid">
              <p className="xl:text-3xl md:text-3xl 340Screen:text-xl text-xl font-semibold ">
                {item.listItem.title}
              </p>

              <p className="text-lg font-normal">{item.listItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccessibilityServices
