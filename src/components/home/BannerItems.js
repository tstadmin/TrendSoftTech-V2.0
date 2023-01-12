import React from "react"
import Card from "../common/Card"

import { BannerItemDiv } from "./HomeStyle"
const BannerItems = props => {
  return (
    <BannerItemDiv>
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
