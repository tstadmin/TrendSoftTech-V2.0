import React from "react"

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
      <div className="2xl:-mt-24 xl:-mt-36 lg:-mt-16 md:-mt-6 sm:-mt-4 540Screen:-mt-[6%]   440Screen:-mt-[24%] 340Screen:-mt-[37%]   -mt-[26%] font-Poppins">
        <img
          className="w-[100vw] xl:h-[100vh] lg:h-[65vh] md:h-[50vh] sm:h-[40vh] 540Screen:h-[40vh] 340Screen:h-[399px] h-[300px] "
          src={props.banner.image}
          alt={props.banner.alt}
        />
        <div className="absolute top-0 xl:mt-[20%] lg:mt-[25%] md:mt-[28%] 440Screen:mt-40 340Screen:mt-32  mt-[29%] md:space-y-12 440Screen:space-y-2 space-y-1 text-white 1920Screen:pl-16 xl:pl-24 440Screen:pl-8 pl-3">
          <div
            className="1920Screen:w-[50vw] 440Screen:w-[40vw] w-[250px]  "
            dangerouslySetInnerHTML={{ __html: props.banner.headers }}
          />

          <div className="lg:text-2xl md:text-lg text-sm 2xl:w-40vw w-[40vw] lg:w-[35vw] ">
            {props.banner.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
