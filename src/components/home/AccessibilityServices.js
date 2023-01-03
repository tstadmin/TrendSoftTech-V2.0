import React from "react"
import {
  Accessibility,
  Title,
  SubTitle,
  AccessibilityCard,
  AccessibilityCardInfo,
  AccessibilityCardTitle,
  AccessibilityInfo,
  Description,
  AccessibilityImage,
} from "./HomeStyle"

const AccessibilityServices = props => {
  return (
    <div data-sal="fade" data-sal-delay="100" data-sal-easing="ease-in-out">
      <Accessibility>
        <Title>{props.accessibilityServices.title}</Title>
        <SubTitle>{props.accessibilityServices.subTitle}</SubTitle>
      </Accessibility>

      <AccessibilityCard>
        {props.accessibilityServices.list?.map((item, id) => (
          <AccessibilityCardInfo key={item.listItem.id}>
            <AccessibilityImage
              src={item.listItem.img}
              alt={item.listItem.alt}
            />
            <AccessibilityInfo>
              <AccessibilityCardTitle>
                {item.listItem.title}
              </AccessibilityCardTitle>

              <Description>{item.listItem.description}</Description>
            </AccessibilityInfo>
          </AccessibilityCardInfo>
        ))}
      </AccessibilityCard>
    </div>
  )
}

export default AccessibilityServices
