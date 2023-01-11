import React from "react"
import Card from "../common/Card"

import { BannerItemDiv } from "./HomeStyle"
const BannerItems = props => {
  return (
    <BannerItemDiv
      data-sal="slide-right"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      {props.bannerItem.map((item, id) => (
        <Card
          key={id}
          img={item.card.img}
          title={item.card.title}
          description={item.card.description}
        />
      ))}
    </BannerItemDiv>
  )
}

export default BannerItems
