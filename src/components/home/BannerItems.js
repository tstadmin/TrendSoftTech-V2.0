import React from "react"
import Card from "../common/Card"
import tw from "twin.macro"
const BannerItems = props => {
  const Div = tw.div`lg:flex grid gap-5 justify-center  2xl:px-48 xl:px-28 lg:px-16  px-10 mt-36`
  return (
    <Div>
      {props.bannerItem.map((item, id) => (
        <Card
          key={id}
          img={item.card.img}
          title={item.card.title}
          description={item.card.description}
        />
      ))}
    </Div>
  )
}

export default BannerItems
