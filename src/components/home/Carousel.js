import React, { useRef } from "react"

import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"
import "./HomeStyle.css"
import { Link } from "gatsby"
const CarouselItem = props => {
  const autoplay = useRef(Autoplay({ delay: 6000 }))

  return (
    <div>
      <Carousel
        dragFree
        draggable={false}
        loop
        align="start"
        transitionDuration="1500"
        plugins={[autoplay.current]}
        previousControlLabel=" previous"
        nextControlLabel="Next"
        nextControlIcon={
          <div className="flex items-center p-0.5 ">
            {/* <IconArrowRight size={16} /> */}

            <small className="p-0 align-top ">Next</small>
            <BsArrowRightShort className="text-[18px]" />
          </div>
        }
        previousControlIcon={
          <div className="flex  items-center p-0.5">
            {/* <IconArrowRight size={16} /> */}
            <BsArrowLeftShort className="text-[18px]" />
            <small className="p-0 align-top ">Prev</small>
          </div>
        }
      >
        {props.carousel.list.map((item, idx) => (
          <Carousel.Slide key={item.listItem.id}>
            <div className="w-[100vw] text-center 2048Screen:h-[calc(100%-137px)] 1920Screen:h-[calc(100%-117px)]  xl:h-[calc(100%-300px)] lg:h-[calc(100%-400px)]  md:h-[calc(100%-408px)] sm:h-[calc(100%-630px)] 540Screen:h-[calc(100%-500px)] 440Screen:h-[calc(100%-350px)] 340Screen:h-[calc(100%-362px)]  h-[calc(100%-457px)] relative ">
              <img src={item.listItem.img} className="w-[100%]" />

              <div className="absolute 2048Screen:top-[250px] 1920Screen:top-[230px] xl:top-[170px]  md:top-[120px] sm:top-[60px] 540Screen:top-[60px] 340Screen:top-[40px] 240Screen:top-[20px]   w-[100%] sm:space-y-8 space-y-4">
                <p className="text-center text-white  xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-xs font-semibold">
                  {item.listItem.title}
                </p>

                <div>
                  <Link
                    to={item.listItem.page}
                    aria-label={item.listItem.label}
                    className=" bg-white sm:p-2  hover:cursor-pointer  p-2 rounded-md  md:text-base sm:text-sm text-xs  text-blue-500"
                  >
                    {item.listItem.CTA}
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselItem
