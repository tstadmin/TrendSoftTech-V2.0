import { Link } from "gatsby"
import React from "react"
import Card from "../common/Card"
import { Services, ServicesTitleDiv, Title } from "./HomeStyle"

const ServicesProvide = props => {
  return (
    <Services>
      <ServicesTitleDiv>
        <Title>{props.servicesProvide.subTitle}</Title>
      </ServicesTitleDiv>
      <ul className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 lg:justify-items-start justify-items-center grid grid-cols-1 gap-5 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
        {props.servicesProvide.list?.map((item, idx) => (
          // <Link
          //   to={item.listItem.page}
          //   key={item.listItem.id}
          // >
          <Card
            key={item.listItem.id}
            img={item.listItem.img}
            label={item.listItem.label}
            title={item.listItem.title}
            description={item.listItem.description}
            page={item.listItem.page}
            CTA={item.listItem.CTA}
          />
          // </Link>
        ))}
      </ul>
    </Services>
  )
}

export default ServicesProvide
