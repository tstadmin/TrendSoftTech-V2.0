import React from "react"
import background from "../../../static/img/HomeImages/bannerImage.svg"

const Banner = props => {
  return (
    <div id="header" role="banner">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="font-Poppins md:h-[calc(100vh-137px)]  540Screen:h-[calc(100vh-137px)] 340Screen:h-[calc(60vh-137px)] h-[calc(100vh-137px)] bg-no-repeat bg-cover bg-center  "
      >
        <div className=" xl:pt-[10%] 540Screen:pt-[6%] 440Screen:pt-[15%] 340Screen:pt-[25%] pt-[4%] 1920Screen:pl-44 md:pl-24 pl-8 540Screen:space-y-16 space-y-6  xl:text-white text-black ">
          <div
            className="1920Screen:w-[50vw] xl:w-[40vw] lg:w-[60vw] md:w-[80vw] sm:w-[60vw] 540Screen:w-[80vw]  w-[250px]  "
            dangerouslySetInnerHTML={{ __html: props.banner.headers }}
          />

          <div className="lg:text-2xl md:text-lg 340Screen:text-sm text-xs 2xl:w-40vw 540Screen:w-[50vw] w-[50vw] lg:w-[35vw] 340Screen:font-medium font-normal  ">
            {props.banner.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
