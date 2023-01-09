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
      <div className="2xl:-mt-24 xl:-mt-36 lg:-mt-48 md:-mt-60 -mt-72 font-Poppins">
        <img
          className="min-w-[100vw] min-h-[100vh]"
          src={props.banner.image}
          alt={props.banner.alt}
        />
        <div className="absolute z-20 top-0 xl:mt-[20%] mt-[25%] space-y-12 text-white 1920Screen:pl-16 xl:pl-24 pl-8">
          <div
            className="1920Screen:w-[50vw] w-[40vw]"
            dangerouslySetInnerHTML={{ __html: props.banner.headers }}
          />

          <div className="text-2xl 2xl:w-40vw w-[40vw] lg:w-[35vw] ">
            {props.banner.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
