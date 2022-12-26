import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"

import bannerImage from "../../../static/img/HomeImages/banner.svg"

const Banner = props => {
  const Images = tw.img`object-cover w-[100vw] lg:h-[91vh]  sm:h-[60vh] h-[30vh] `
  const Div = tw.div`flex relative`
  const Button = tw.button` sm:text-2xl text-sm  hover:bg-white border-2 border-blue-500 hover:border-[#f37c05]   hover:duration-700  text-white hover:text-blue-500  font-mono bg-blue-500 font-semibold duration-75  px-14 py-2 mb-1 rounded-full`
  const InfoDiv = tw.div`sm:space-y-14 space-y-4 sm:py-24 py-12 2xl:w-[70vw]  2xl:h-[100vh] lg:w-[65vw]  lg:h-[95vh] sm:h-[60vh] h-[30vh] sm:pl-20 lg:pl-48 pl-8 lg:pt-48`
  const H1 = tw.h1` 2xl:text-8xl xl:text-7xl md:text-5xl sm:text-6xl text-xl  font-bold font-mono`
  const H2 = tw.h1` 2xl:text-3xl md:text-2xl text-sm font-normal font-mono`
  const ImageDiv = tw.div`absolute -z-20`
  return (
    <Div>
      <InfoDiv>
        <H1>
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </H1>

        <H2>{props.banner.title}</H2>

        <Button>
          {" "}
          <Link to="/contact/">{props.banner.CTA}</Link>
        </Button>
      </InfoDiv>

      <ImageDiv>
        <Images src={bannerImage} alt="bannerImage" />
      </ImageDiv>
    </Div>
  )
}

export default Banner
