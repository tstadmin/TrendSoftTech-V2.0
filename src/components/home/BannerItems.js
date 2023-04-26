import React from "react"
import Card from "../common/Card"

const BannerItems = props => {
  return (
    <ul className="lg:flex grid gap-5 py-16 lg:justify-start justify-center 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
      {props.bannerItem.map((item, id) => (
        <Card
          key={id}
          img={item.card.img}
          titles={item.card.title}
          description={item.card.description}
        />
      ))}
    </ul>
  )
}

export default BannerItems
