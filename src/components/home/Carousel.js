import React, { useRef } from "react"

import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"

import "./HomeStyle.css"
import { Link } from "gatsby"
const CarouselItem = (props) => {

  const autoplay = useRef(Autoplay({ delay: 6000 }))

  return (
    <div>
      <Carousel
       
        dragFree
        loop
        align="start"
        transitionDuration="1500"
        plugins={[autoplay.current]}
        
      >
        {props.carousel.list.map((item,idx) => (
          <Carousel.Slide key={item.listItem.id} className="w-[100vw] text-center 2048Screen:h-[calc(70vh-137px)] 1920Screen:h-[calc(70vh-117px)]  xl:h-[calc(70vh-197px)] md:h-[calc(60vh-220px)] sm:h-[calc(60vh-300px)] 540Screen:h-[calc(73vh-357px)] 440Screen:h-[calc(60vh-350px)] 340Screen:h-[calc(60vh-362px)]  h-[calc(60vh-387px)] relative ">
            <img src={item.listItem.img} className="w-[100%]" />

            <div className="absolute  1920Screen:top-[200px] 2xl:top-[130px] md:top-[120px] sm:top-[60px] 540Screen:top-[60px] 340Screen:top-[40px] 240Screen:top-[20px]   w-[100%] sm:space-y-8 space-y-4">
              <h1 className="text-center text-white  lg:text-2xl md:text-lg sm:text-sm text-xs font-semibold">
                {item.listItem.title}
              </h1>
              <div className="">
              <Link to={item.listItem.page} className=" bg-white sm:p-2  hover:cursor-pointer  p-2 rounded-md  md:text-base sm:text-sm text-xs  text-blue-500">
              {item.listItem.CTA}
              </Link>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselItem
