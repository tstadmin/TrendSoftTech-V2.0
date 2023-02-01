import React from "react"
import background from "../../../static/img/HomeImages/banner.svg"
import "animate.css"
const Banner = props => {
  return (
    <div id="header" role="banner">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className=" font-Poppins xl:h-[calc(100vh-137px)] md:h-[calc(60vh-137px)] sm:h-[calc(60vh-137px)] 540Screen:h-[calc(60vh-137px)] 440Screen:h-[calc(60vh-137px)] 340Screen:h-[calc(60vh-137px)]  h-[calc(120vh-137px)] bg-no-repeat bg-cover bg-center  "
      >
        <center className="  xl:pt-[15%] 540Screen:pt-[10%] 440Screen:pt-[18%] 340Screen:pt-[25%] pt-[4%]  540Screen:space-y-16 space-y-6  text-white ">
          <div
            className="animate__animated animate__fadeInLeft  1920Screen:w-[30vw] xl:w-[40vw] lg:w-[40vw] md:w-[50vw] sm:w-[60vw] 540Screen:w-[80vw] 440Screen:w-[60vw]  324Screen:w-[250px] 240Screen:w-[200px]  "
            dangerouslySetInnerHTML={{ __html: props.banner.headers }}
          />

          {/* <div className="animate__animated animate__fadeInLeft lg:text-2xl md:text-lg 340Screen:text-sm text-xs 2xl:w-40vw 540Screen:w-[40vw] 440Screen:w-[60vw] md:w-[35vw] w-[50vw] lg:w-[35vw] 340Screen:font-medium font-normal  ">
            {props.banner.title}
          </div> */}
        </center>
      </div>
    </div>
  )
}

export default Banner
