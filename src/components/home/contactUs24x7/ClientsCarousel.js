
import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import { Carousel } from '@trendyol-js/react-carousel';
const ClientsCarousel = (props) => {
   
  return (
    <div className='grid grid-cols-7 bg-blue-200 justify-items-center px-36 gap-8  '>

            {props.clients.list?.map((i, idx) => (
                 <div className="p-10"> 
                <img src={i.listItem.img} alt="" className="h-[95px] w-[100xp] " />
                </div>
            ))
            }

    </div>
    // <div className="" >
    //     <Carousel  centerSlidePercentage={50} >
    //     {props.clients.list?.map((i, idx) => (
    //               <div className="p-10" > 
    //             <img src={i.listItem.img} alt="" className="w-[100px] h-[200px] " />
    //             </div>
    //         ))
    //         }
    //     </Carousel>
    // </div>
  )
}

export default ClientsCarousel
