import { Link } from "gatsby"
import React, { useState } from "react"
import Card from "../common/Card"
import {
  Services,
  ServicesTitleDiv,
  ServicesSubTitle,
  ServicesProvideCard,
  Title,
} from "./HomeStyle"

const ServicesProvide = props => {
  let timer = 0
  let delay = 200
  let prevent = false
  const onDoubleClickHandler = e => {
    clearTimeout(e.timer)
    e.prevent = true
    setTimeout(e => {
      e.prevent = false
    }, e.delay)
  }

  return (
    <Services>
      <ServicesTitleDiv>
        <Title>{props.servicesProvide.subTitle}</Title>
      </ServicesTitleDiv>
      <ServicesProvideCard>
        {props.servicesProvide.list?.map((item, id) => (
          <Link to={item.listItem.page} onDoubleClick={onDoubleClickHandler}>
            <Card
              img={item.listItem.img}
              label={item.listItem.label}
              key={id}
              title={item.listItem.title}
              description={item.listItem.description}
              page={item.listItem.page}
              CTA={item.listItem.CTA}
            />
          </Link>
        ))}
      </ServicesProvideCard>
    </Services>
  )
}

export default ServicesProvide
