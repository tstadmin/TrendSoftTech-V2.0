import React, { useRef } from "react"

import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"

import { Button } from "@mantine/core"
import "./HomeStyle.css"
import { Link } from "gatsby"
const CarouselItem = () => {
  const data = [
    {
      id: 1,
      img: "/img/HomeImages/home_banner_1.jpg",
      description: "We Increase your Business Success",
    },
    {
      id: 2,
      img: "/img/HomeImages/home_banner_2.jpg",
      description: "Web Development",
    },
    {
      id: 3,
      img: "/img/HomeImages/home_banner_3.jpg",
      description: "Ecommerce Development",
    },
  ]
  const autoplay = useRef(Autoplay({ delay: 6000 }))

  return (
    <div>
      <Carousel
        withIndicators
        dragFree
        loop
        align="start"
        transitionDuration="1500"
        plugins={[autoplay.current]}
      >
        {data.map(item => (
          <Carousel.Slide className="w-[100vw] 2048Screen:h-[calc(70vh-137px)] 1920Screen:h-[calc(70vh-117px)] xl:h-[calc(70vh-137px)] md:h-[calc(60vh-60px)] sm:h-[calc(60vh-40px)] 540Screen:h-[calc(60vh-137px)] 440Screen:h-[calc(60vh-137px)] 340Screen:h-[calc(60vh-137px)] 320Screen:h-[calc(100vh-137px)] h-[calc(40vh-137px)] relative ">
            <img src={item.img} />

            <div className="absolute sm:top-[210px] top-[25px] 340Screen:top-[150px]   w-[100%] sm:space-y-8 space-y-4">
              <p className="text-center text-white  lg:text-3xl md:text-lg sm:text-sm text-xs font-semibold">
                {item.description}
              </p>
              {/* <p className="text-center bg-blue-700 sm:p-2 hover:cursor-pointer   p-1 rounded-lg  lg:text-xl md:text-lg sm:text-sm text-xs sm:w-[130px] w-[100px]  text-white">
                Learn More
              </p> */}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselItem
