import React from "react"
import {
  Accessibility,
  Title,
  AccessibilityCardTitle,
  AccessibilityInfo,
  AccessibilityImage,
} from "./HomeStyle"

const AccessibilityServices = props => {
  return (
    <div>
      <Accessibility>
        <Title>{props.accessibilityServices.title}</Title>
      </Accessibility>

      <ul className="lg:flex lg:justify-items-center  grid gap-7    2xl:px-48 xl:px-32 lg:px-14 px-8">
        {props.accessibilityServices.list?.map((item, id) => (
          <li
            className=" 340Screen:flex  hover:duration-700 md:space-x-11 340Screen:space-x-5 shadow-2xl   xl:min-w-[500px]  min-h-[170px] lg:min-w-[460px]  p-7  shadow-blue-100 hover:shadow-none duration-1000 cursor-pointer  hover:bg-blue-50"
            key={item.listItem.id}
          >
            <AccessibilityImage src={item.listItem.img} alt="" />
            <AccessibilityInfo>
              <AccessibilityCardTitle>
                {item.listItem.title}
              </AccessibilityCardTitle>

              <p>{item.listItem.description}</p>
            </AccessibilityInfo>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccessibilityServices
