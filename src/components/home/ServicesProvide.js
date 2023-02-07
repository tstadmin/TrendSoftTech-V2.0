import { Link } from "gatsby"
import React from "react"
import Card from "../common/Card"
import {
  Services,
  ServicesTitleDiv,
  ServicesProvideCard,
  Title,
} from "./HomeStyle"

const ServicesProvide = props => {
  // let timer = 0
  // let delay = 200
  // let prevent = false
  // const onDoubleClickHandler = e => {
  //   clearTimeout(e.timer)
  //   e.prevent = true
  //   setTimeout(e => {
  //     e.prevent = false
  //   }, e.delay)
  // }

  return (
    <Services>
      <ServicesTitleDiv>
        <Title>{props.servicesProvide.subTitle}</Title>
      </ServicesTitleDiv>
      <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2  grid grid-cols-1 gap-5 justify-items-center 1920Screen:px-48 2xl:px-24  md:px-16 px-8">
        {props.servicesProvide.list?.map((item, idx) => (
          <Link
            to={item.listItem.page}
            // onDoubleClick={onDoubleClickHandler}
            key={item.listItem.id}
          >
            <Card
              img={item.listItem.img}
              label={item.listItem.label}
              title={item.listItem.title}
              description={item.listItem.description}
              page={item.listItem.page}
              CTA={item.listItem.CTA}
            />
          </Link>
        ))}
      </div>
    </Services>
  )
}

export default ServicesProvide
