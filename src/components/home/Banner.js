import React from "react"
import tw from "twin.macro"
const Banner = props => {
  const Images = tw.img`object-cover 2xl:h-[100vh]  w-[100vw] h-[95vh] brightness-50`
  const Div = tw.div`lg:flex relative shadow-2xl shadow-black/40`
  const Button = tw.button` text-2xl border  border-blue-500   text-blue-500  font-mono hover:bg-blue-500 hover:text-white font-semibold duration-75  px-14 py-2 mb-1 rounded-full`
  const InfoDiv = tw.div`space-y-14 text-white py-24 2xl:w-[60vw]  2xl:h-[100vh] lg:w-[60vw]  lg:h-[95vh] md:h-[80vh] h-[80vh] sm:pl-20 lg:pl-48 pl-8 lg:pt-48`
  const H1 = tw.h1` 2xl:text-8xl xl:text-7xl md:text-5xl sm:text-6xl text-4xl  font-bold font-mono`
  const H2 = tw.h1` 2xl:text-3xl md:text-2xl text-xl font-normal font-mono`
  const ImgeDiv = tw.div`absolute -z-20 hidden  lg:block`
  return (
    <Div>
      <InfoDiv>
        {/* <h1
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-in-out"
          className=" 2xl:text-8xl xl:text-7xl md:text-5xl text-3xl font-bold"
        >
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </h1> */}

        <H1>
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </H1>
        {/* <h1
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-easing="ease-in-out"
          className="
        2xl:text-3xl 
        440Screen:text-xl 
        font-normal"
        >
          {props.banner.title}
        </h1> */}
        <H2>{props.banner.title}</H2>
        {/* <button
          data-sal="slide-up"
          data-sal-delay="1000"
          data-sal-easing="ease-in-out"
          className="
          text-2xl border
          border-blue-500
          text-blue-500
          hover:bg-blue-500
          hover:text-white
          font-semibold
          duration-75
          px-14
          py-2
          mb-1
          rounded-full"
        >
          {props.banner.CTA}
        </button> */}
        <Button>{props.banner.CTA}</Button>
      </InfoDiv>
      {/* absolute -z-20 340Screen:hidden lg:block */}
      <ImgeDiv>
        <Images
          src="https://static.vecteezy.com/system/resources/previews/008/484/147/original/business-people-team-work-laptop-computer-office-workplace-free-vector.jpg"
          alt="bannerImage"
        />
      </ImgeDiv>
    </Div>
  )
}

export default Banner

// space-y-14 bg-black text-white py-24 lg:w-[60vw]  lg:h-[100vh] md:h-[80vh] h-[80vh] sm:pl-20 lg:pl-48 240Screen:pl-8 lg:pt-48
