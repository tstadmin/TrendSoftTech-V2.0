import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { imagess} from "../../../static/img/HomeImages/banner.svg"
import { Button } from '@mantine/core';
import img1 from "../../../static/img/HomeImages/banner.svg"
import "./HomeStyle.css"
import { Link } from 'gatsby';
const CarouselItem = () => {
    const data=[
        {
            id:1,
            img:"/img/HomeImages/banner.svg",
            description: "We Increase your Business Success"
        },
        {
            id:2,
            img:"http://qa.trendsofttech.co.in/img/HomeImages/aboutUS.svg",
            description: "Web Development"
        },
        {
            id:3,
            img:"http://qa.trendsofttech.co.in/img/HomeImages/aboutUS.svg",
            description: "Ecommerce Development"
        }
    ]
  return (
    <div>
       <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true} transitionTime={900} showIndicators={false} >
        {
            data.map((item)=>(
                <div className='w-[100vw] 2048Screen:h-[calc(70vh-137px)] 1920Screen:h-[calc(70vh-117px)] xl:h-[calc(70vh-137px)] md:h-[calc(60vh-60px)] sm:h-[calc(60vh-40px)] 540Screen:h-[calc(60vh-137px)] 440Screen:h-[calc(60vh-137px)] 340Screen:h-[calc(60vh-137px)] 320Screen:h-[calc(100vh-137px)] h-[calc(40vh-137px)] relative '  >
                    
                <img src={item.img} className=""  />
          
                    <div className='absolute  sm:top-[210px] top-[25px] 340Screen:top-[150px]   w-[100%] sm:space-y-8 space-y-4'>
                <p className='text-center text-white  lg:text-3xl md:text-lg sm:text-sm text-xs font-semibold'>{item.description}</p>
                <div>
                <Link  to="/contact/" className='bg-blue-700 sm:p-2 hover:cursor-pointer   p-1 rounded-lg  lg:text-xl md:text-lg sm:text-sm text-xs sm:w-[130px] w-[100px] justify-center text-white'>connect</Link>
                </div>
                </div>
                </div>
            ))
        }

            </Carousel>
    </div>
  )
}

export default CarouselItem
