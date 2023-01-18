import React from "react"
import {
  Accessibility,
  Title,
  SubTitle,
  AccessibilityCard,
  AccessibilityCardInfo,
  AccessibilityCardTitle,
  AccessibilityInfo,
  AccessibilityImage,
} from "./HomeStyle"

const AccessibilityServices = props => {
  return (
    <div>
      <Accessibility>
        <Title className="text-orange-400 ">
          {props.accessibilityServices.title}
        </Title>
        <SubTitle>{props.accessibilityServices.subTitle}</SubTitle>
      </Accessibility>

      <AccessibilityCard>
        {props.accessibilityServices.list?.map((item, id) => (
          <div
            className=" 340Screen:flex  hover:duration-700 md:space-x-11 340Screen:space-x-5 shadow-2xl   xl:min-w-[500px]  min-h-[170px] lg:min-w-[460px]  p-7  shadow-blue-100 hover:shadow-none duration-1000 cursor-pointer  hover:bg-blue-50"
            key={item.listItem.id}
          >
            <AccessibilityImage src={item.listItem.img} />
            <AccessibilityInfo>
              <AccessibilityCardTitle>
                {item.listItem.title}
              </AccessibilityCardTitle>

              <p>{item.listItem.description}</p>
            </AccessibilityInfo>
          </div>
        ))}
      </AccessibilityCard>
    </div>
  )
}

export default AccessibilityServices
