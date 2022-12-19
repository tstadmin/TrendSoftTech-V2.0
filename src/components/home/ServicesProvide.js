import React from "react"
import tw from "twin.macro"
import Card from "../common/Card"

const ServicesProvide = props => {
  const Div = tw.div`text-center mt-24 `
  const TitleDiv = tw.div`text-center mb-16 `
  const Title = tw.h1`text-lg font-semibold text-blue-500`
  const SubTitle = tw.div`text-[36px] font-bold `
  const CardInfo = tw.div`xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1 gap-5 justify-items-center 2xl:px-48 xl:px-28 lg:px-16  px-8`
  return (
    <Div>
      <TitleDiv>
        <Title>SERVICES</Title>
        <SubTitle>Services we provide</SubTitle>
      </TitleDiv>
      <CardInfo>
        {props.servicesProvide.map((item, id) => (
          <Card
            img={item.listItem.img}
            key={id}
            title={item.listItem.title}
            description={item.listItem.description}
            CTA={item.listItem.CTA}
          />
        ))}
      </CardInfo>
    </Div>
  )
}

export default ServicesProvide
