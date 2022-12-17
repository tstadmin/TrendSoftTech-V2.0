import React from "react"

const Banner = props => {
  return (
    <div className=" lg:flex relative">
      <div className="space-y-14 bg-white py-24 lg:w-[60vw]  lg:h-[95vh] h-[60vh] sm:pl-20 lg:pl-48 240Screen:pl-8 lg:pt-48">
        <h1
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-in-out"
          className="
        2xl:text-8xl 
        xl:text-7xl 
        md:text-5xl 
        440Screen:text-4xl 
        text-2xl  
        font-bold "
        >
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </h1>
        <h1
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-easing="ease-in-out"
          className="
        2xl:text-3xl 
        440Screen:text-xl 
        font-normal"
        >
          {props.banner.title}
        </h1>
        <button
          data-sal="slide-up"
          data-sal-delay="1000"
          data-sal-easing="ease-in-out"
          className="
        text-2xl border-2 
        border-blue-500 
        text-blue-500 
        hover:bg-blue-500 
        hover:text-white 
        duration-75 
        px-14 
        py-3 
        rounded-full"
        >
          {props.banner.CTA}
        </button>
      </div>

      <div className="absolute -z-20 340Screen:hidden lg:block">
        <img
          className="object-cover w-[100vw] h-[95vh]"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="bannerImage"
        />
      </div>
    </div>
  )
}

export default Banner
