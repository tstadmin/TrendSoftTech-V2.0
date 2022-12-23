import React from "react"
import tw from "twin.macro"

const Banner = props => {
  const Images = tw.img`object-cover w-[100vw] lg:h-[91vh]  h-[60vh] brightness-50`
  const Div = tw.div`flex relative`
  const Button = tw.button` text-2xl  hover:bg-white   hover:duration-700  text-white hover:text-blue-500  font-mono bg-blue-500 font-semibold duration-75  px-14 py-2 mb-1 rounded-full`
  const InfoDiv = tw.div`space-y-14  text-white py-24 2xl:w-[70vw]  2xl:h-[100vh] lg:w-[65vw]  lg:h-[95vh] md:h-[60vh] h-[60vh] sm:pl-20 lg:pl-48 pl-8 lg:pt-48`
  const H1 = tw.h1` 2xl:text-8xl xl:text-7xl md:text-5xl sm:text-6xl text-4xl  font-bold font-mono`
  const H2 = tw.h1` 2xl:text-3xl md:text-2xl text-xl font-normal font-mono`
  const ImageDiv = tw.div`absolute -z-20`
  return (
    <Div>
      <InfoDiv>
        <H1>
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </H1>

        <H2>{props.banner.title}</H2>

        <Button>{props.banner.CTA}</Button>
      </InfoDiv>

      <ImageDiv>
        <Images
          src="https://static.vecteezy.com/system/resources/previews/008/484/147/original/business-people-team-work-laptop-computer-office-workplace-free-vector.jpg"
          alt="bannerImage"
        />
      </ImageDiv>
    </Div>
  )
}

export default Banner
