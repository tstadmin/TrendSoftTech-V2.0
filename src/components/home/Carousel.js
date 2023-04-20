import React, { useRef, useState } from "react"

import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import "./HomeStyle.css"
import { Link } from "gatsby"
import Demo from "./Demo"
import { carouselItems } from "./carouselItems"
const CarouselItem = props => {
  const autoplay = useRef(Autoplay({ delay: 6000 }))

  const [currentIndex, setCurrentIndex] = useState(0)

  const ref = useRef(null)

  const slides = [
    {
      id: 1,
      img: "/img/carousel/homebanner1.jpg",
      title: "We Increase your Business Success",
      label: "Contact",
      page: "/contact/",
      slidescount: "slide 1 of 9",
      CTA: "Contact",
    },
    {
      id: 2,
      img: "/img/carousel/WEBDEVELOPMENT.jpg",
      title: "WEB DEVELOPMENT",
      page: "/services/webDevelopment/",
      label: "Learn More  WEB DEVELOPMENT ",
      slidescount: "slide 2 of 9",
      CTA: "Learn More",
    },
    {
      id: 3,
      img: "/img/carousel/ECOMMERCEDEVELOPMENT.jpg",
      title: "E-COMMERCE DEVELOPMENT",
      page: "/services/ecommerceDevelopment/",
      label: "Learn More  ECOMMERCE DEVELOPMENT ",
      slidescount: "slide 3 of 9",
      CTA: "Learn More",
    },
    {
      id: 4,
      img: "/img/carousel/MOBILEDEVELOPMENT.jpg",
      title: "MOBILE DEVELOPMENT",
      label: "Learn More MOBILE DEVELOPMENT",
      page: "/services/mobileDevelopment/",
      slidescount: "slide 4 of 9",
      CTA: "Learn More",
    },
    {
      id: 5,
      img: "/img/carousel/PRODUCTDEVELOPMENT.jpg",
      title: "PRODUCT DEVELOPMENT",
      label: "Learn More PRODUCT DEVELOPMENT ",
      page: "/services/productDevelopment/",
      slidescount: "slide 5 of 9",
      CTA: "Learn More",
    },
    {
      id: 6,
      img: "/img/carousel/UIUXDESIGN.jpg",
      title: "UI / UX DESIGN",
      label: "Learn More UI / UX DESIGN",
      page: "/services/uiUXDesign/",
      slidescount: "slide 6 of 9",
      CTA: "Learn More",
    },
    {
      id: 7,
      img: "/img/carousel/MANUALTESTING.jpg",
      title: "MANUAL TESTING",
      label: "Learn More MANUAL TESTING",
      page: "/services/testing/",
      slidescount: "slide 7 of 9",
      CTA: "Learn More",
    },
    {
      id: 8,
      img: "/img/carousel/AUTOMATIONTESTING.jpg",
      title: "AUTOMATION TESTING",
      label: "Learn More  AUTOMATION TESTING",
      page: "/services/testing/",
      slidescount: "slide 8 of 9",
      CTA: "Learn More",
    },
    {
      id: 9,
      img: "/img/carousel/DIGITALMARKETING.jpg",
      title: "DIGITAL MARKETING",
      label: "Learn More DIGITAL MARKETING ",
      page: "/services/digitalMarketing/",
      slidescount: "slide 9 of 9",
      CTA: "Learn More",
    },
  ]

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    ref.current.focus()
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    ref.current.focus()
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div>
      <div>
        {/* <Carousel
          draggable={true}
          loop
          align="start"
          transitionDuration="1500"
          // plugins={[autoplay.current]}
          previousControlLabel=" previous"
          nextControlLabel="Next"
          previousControlIcon={
            <div className="flex  items-center p-0.5">
              <BsArrowLeftShort className=" lg:text-[30px] sm:text-[16px] text-[16px]" />
              <small className="p-0 align-top md:text-[14px] text[12px] mb-1 md:block hidden">
                Prev
              </small>
            </div>
          }
          nextControlIcon={
            <div className="flex items-center p-0.5  ">
              <small className="p-0 align-top md:text-[14px] text[12px] mb-1 md:block hidden">
                Next
              </small>
              <BsArrowRightShort className=" lg:text-[30px] sm:text-[16px] text-[16px]" />
            </div>
          }
        >
          <span class="sr-only w-auto">Carousel</span>
          {props.carousel.list.map((item, idx) => (
            <Carousel.Slide key={item.listItem.id}>
              <div
                role="group"
                aria-label={item.listItem.slidescount}
                // aria-live="polite"
                // aria-controls="IDREF"
                className="w-[100vw] text-center 2048Screen:h-[calc(100%-137px)] 1920Screen:h-[calc(100%-117px)]  xl:h-[calc(100%-300px)] lg:h-[calc(100%-400px)]  md:h-[calc(100%-408px)] sm:h-[calc(100%-630px)] 540Screen:h-[calc(100%-500px)] 440Screen:h-[calc(100%-350px)] 340Screen:h-[calc(100%-362px)]  h-[calc(100%-457px)] relative "
              >
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
        </Carousel> */}
      </div>
      <div>
        <div
          className="max-w-full 2xl:h-[480px] xl:h-[450px] md:h-[400px] 440Screen:h-[300px] h-[200px] w-[100vw] m-auto  relative group"
          aria-roledescription="carousel"
          role="region"
        >
          <span class="sr-only w-auto">Carousel</span>

          {/* Left Arrow */}
          <button
            className="slid  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer"
            onClick={prevSlide}
            aria-controls="myCarousel-items"
            aria-label="Previous Slide"
            ref={ref}
            tabIndex={0}
          >
            <BsChevronCompactLeft className="md:text-[30px] text-[20px] " />
            <p className="slider">Prev</p>
          </button>

          <div
            style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
            className="w-full h-full flex justify-center items-center bg-center bg-cover duration-500"
            // aria-live="polite" /// main dev
            role="group"
            aria-roledescription="slide"
            aria-label={slides[currentIndex].slidescount}
          >
            <div className=" grid justify-center gap-4 ">
              <h2 className=" text-center text-white  xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-xs font-semibold">
                {slides[currentIndex].title}
              </h2>
              <div className="text-center">
                <Link
                  to={slides[currentIndex].page}
                  className="bg-white sm:p-2  hover:cursor-pointer  p-2 rounded-md  md:text-base sm:text-sm text-xs   text-blue-500"
                  ref={ref}
                  tabIndex={0}
                  aria-label={slides[currentIndex].label}
                >
                  {slides[currentIndex].CTA}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-controls="myCarousel-items"
            aria-label="Next Slide"
            className="slid group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer"
          >
            <BsChevronCompactRight className="md:text-[30px] text-[20px] " />
            <p className="slider">Next</p>
          </button>

          {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
