import React from "react"
import Card from "../common/Card"

const BannerItems = props => {
  return (
    <div>
      <div className="md:flex sm:grid gap-10 justify-center absolute top-[80%] left-[7%] z-10 ">
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
