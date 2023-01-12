import React from "react"
import background from "../../../static/img/HomeImages/bannerImage.svg"

import {
  BannerDiv,
  BannerInfoDiv,
  BannerSubTitle,
  BannerTitle,
  BannerImageDiv,
  BannerImage,
} from "./HomeStyle"
const Banner = props => {
  return (
    <div id="header" role="banner">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="font-Poppins md:h-[calc(100vh-137px)] 440Screen:h-[calc(60vh-137px)] h-[calc(60vh-137px)] bg-no-repeat bg-cover text-white"
      >
        <div className="xl:pt-[10%] pt-[15%] 1920Screen:pl-44 md:pl-24 pl-8 space-y-16">
          <div
            className="1920Screen:w-[50vw] xl:w-[40vw] lg:w-[60vw] md:w-[80vw] sm:w-[60vw] 540Screen:w-[80vw] w-[250px] "
            dangerouslySetInnerHTML={{ __html: props.banner.headers }}
          />

          <div className="lg:text-2xl md:text-lg text-sm 2xl:w-40vw 540Screen:w-[40vw] w-[50vw] lg:w-[35vw] ">
            {props.banner.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
