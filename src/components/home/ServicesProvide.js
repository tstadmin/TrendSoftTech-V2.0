import React from "react"
import Card from "../common/Card"
import {
  Services,
  ServicesTitleDiv,
  ServicesTitle,
  ServicesSubTitle,
  ServicesProvideCard,
} from "./HomeStyle"

const ServicesProvide = props => {
  return (
    <Services>
      <ServicesTitleDiv>
        <ServicesTitle>{props.servicesProvide.title}</ServicesTitle>
        <ServicesSubTitle>{props.servicesProvide.subTitle}</ServicesSubTitle>
      </ServicesTitleDiv>
      <ServicesProvideCard>
        {props.servicesProvide.list?.map((item, id) => (
          <Card
            img={item.listItem.img}
            label={item.listItem.label}
            key={id}
            title={item.listItem.title}
            description={item.listItem.description}
            page={item.listItem.page}
            CTA={item.listItem.CTA}
          />
        ))}
      </ServicesProvideCard>
    </Services>
  )
}

export default ServicesProvide
