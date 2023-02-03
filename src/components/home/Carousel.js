import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { imagess} from "../../../static/img/HomeImages/banner.svg"
import { Button } from '@mantine/core';
const CarouselItem = () => {
    const data=[
        {
            id:1,
            img:"http://qa.trendsofttech.co.in/img/HomeImages/aboutUS.svg",
            description: "We Increase your Business Success"
        },
        {
            id:2,
            img:"http://qa.trendsofttech.co.in/img/BreadCrumb/WebDevelopment.svg",
            description: "Web Development"
        },
        {
            id:3,
            img:"http://qa.trendsofttech.co.in/img/BreadCrumb/EcommerceDevelopment.svg",
            description: "Ecommerce Development"
        }
    ]
  return (
    <div>
       <Carousel autoPlay={true} showArrows={false} showThumbs={false} infiniteLoop={true} transitionTime={200}>
        {
            data.map((item)=>(
                <div className='w-[100%] lg:h-[500px] md:h-[400px] 340Screen:h-[300px] 240Screen:h-[240px] h-[300px] relative'  >
                    
                <img src={item.img} className='relative' />
             
                {/* <p className="legend ">Home</p>  */}
                    <div className='absolute top-[30%] justify-items-center w-[100%] space-y-8'>
                <p className='text-center  lg:text-3xl md:text-xl sm:text-sm text-base font-semibold'>{item.description}</p>
                <button className='bg-blue-700 p-2 rounded-lg w-[120px] justify-center text-white'>connect</button>
                </div>
                </div>
            ))
        }
                
              
              
                
            </Carousel>
    </div>
  )
}

export default CarouselItem
