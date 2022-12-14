import React from "react"
import Card from "../common/Card"

const BannerItems = props => {
  // console.log(props)
  return (
    <div>
      {/* <Card /> */}
      <div className="md:flex sm:grid gap-5 justify-center">
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
