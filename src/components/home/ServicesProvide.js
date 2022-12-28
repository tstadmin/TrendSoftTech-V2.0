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
  console.log(props)
  return (
    <Services>
      <ServicesTitleDiv>
        <ServicesTitle>SERVICES</ServicesTitle>
        <ServicesSubTitle>Services we provide</ServicesSubTitle>
      </ServicesTitleDiv>
      <ServicesProvideCard>
        {props.servicesProvide.map((item, id) => (
          <Card
            img={item.listItem.img}
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
