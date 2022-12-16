import React from "react"
import Card from "../common/Card"

const BannerItems = props => {
  return (
    <div>
      <div className="lg:flex grid gap-5 justify-center xl:px-12 lg:px-2 540Screen:px-4 440Screen:px-8 340Screen:px-8 px-4 mt-36 ">
        {props.bannerItem.map((item, id) => (
          <Card
            key={id}
            img={item.card.img}
            title={item.card.title}
            description={item.card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerItems
