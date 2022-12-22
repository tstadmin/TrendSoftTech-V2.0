import React from "react"
import {
  Accessibility_Services,
  Title,
  SubTitle,
  Accessibility_Card,
  Accessibility_CardInfo,
  Accessibility_CardTitle,
  Accessibility_Info,
  Description,
  Accessibility_Image,
} from "./HomeStyle"

const AccessibilityServices = props => {
  return (
    <div data-sal="fade" data-sal-delay="100" data-sal-easing="ease-in-out">
      <Accessibility_Services>
        <Title>OUR</Title>
        <SubTitle>Accessibility Services</SubTitle>
      </Accessibility_Services>

      <Accessibility_Card>
        {props.accessibilityServices.map((item, id) => (
          <Accessibility_CardInfo key={item.listItem.id}>
            <Accessibility_Image
              src={item.listItem.img}
              alt="Accessibility Images"
            />
            <Accessibility_Info>
              <Accessibility_CardTitle>
                {item.listItem.title}
              </Accessibility_CardTitle>

              <Description>{item.listItem.description}</Description>
            </Accessibility_Info>
          </Accessibility_CardInfo>
        ))}
      </Accessibility_Card>
    </div>
  )
}

export default AccessibilityServices
