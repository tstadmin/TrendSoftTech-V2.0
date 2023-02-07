import React from "react"
import Card from "../common/Card"

const BannerItems = props => {
  return (
    <div className="lg:flex grid gap-5 justify-center 1920Screen:px-48  2xl:px-24 xl:px-28 lg:px-16 py-16 px-10">
      {props.bannerItem.map((item, id) => (
        <Card
          key={id}
          img={item.card.img}
          title={item.card.title}
          description={item.card.description}
        />
      ))}
    </div>
  )
}

export default BannerItems
