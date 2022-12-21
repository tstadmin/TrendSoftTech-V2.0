import React from "react"
import {
  Accessibility_Services,
  Title,
  SubTitle,
  Accessibility_Card,
  Accessibility_CardInfo,
  Accessibility_CardTitle,
  Accessibility_Info,
  Description,
  Accessibility_Image,
} from "./HomeStyle"
// import tw from "twin.macro"

const AccessibilityServices = props => {
  // const Description = tw.h6`text-lg font-normal`
  // const Title = tw.h1`text-lg text-blue-500 font-semibold`
  // const SubTitle = tw.h2`text-[36px] font-bold`
  // const Div = tw.div`text-center mb-16 mt-24`
  // const Card = tw.div`lg:flex lg:justify-items-center  grid gap-7   2xl:px-48 xl:px-32 lg:px-14 px-8`
  // const Image = tw.img`2xl:w-[85px] lg:w-[85px] md:w-[80px]  w-[50px] 2xl:h-[85px] lg:h-[85px] md:h-[85px] h-[55px]`
  // const Info = tw.div`grid`
  // const CardTitle = tw.div`xl:text-3xl md:text-3xl  text-xl font-semibold `
  // const CardInfo = tw.div`flex hover:duration-700 md:space-x-11 space-x-5 shadow-2xl   xl:min-w-[500px]  min-h-[170px] lg:min-w-[460px]  p-7  shadow-blue-100 hover:shadow-none duration-1000 cursor-pointer  hover:bg-blue-50`
  return (
    <div data-sal="fade" data-sal-delay="100" data-sal-easing="ease-in-out">
      <Accessibility_Services>
        <Title>OUR</Title>
        <SubTitle>Accessibility Services</SubTitle>
      </Accessibility_Services>

      <Accessibility_Card>
        {props.accessibilityServices.map((item, id) => (
          <Accessibility_CardInfo key={item.listItem.id}>
            <Accessibility_Image
              src={item.listItem.img}
              alt="Accessibility Images"
            />
            <Accessibility_Info>
              <Accessibility_CardTitle>
                {item.listItem.title}
              </Accessibility_CardTitle>

              <Description>{item.listItem.description}</Description>
            </Accessibility_Info>
          </Accessibility_CardInfo>
        ))}
      </Accessibility_Card>
    </div>
  )
}

export default AccessibilityServices
