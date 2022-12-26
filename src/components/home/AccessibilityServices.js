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
        <Title>OUR</Title>
        <SubTitle>Accessibility Services</SubTitle>
      </Accessibility>

      <AccessibilityCard>
        {props.accessibilityServices?.map((item, id) => (
          <AccessibilityCardInfo key={item.listItem.id}>
            <AccessibilityImage
              src={item.listItem.img}
              alt="Accessibility Images"
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
