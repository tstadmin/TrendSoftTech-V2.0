import React from "react"
import tw from "twin.macro"
import Choose from "../../../static/img/AboutImages/Choose.svg"

const ChooseUs = () => {
  const Div = tw.div`lg:flex   justify-center lg:space-x-20 space-y-10  lg:px-20  px-12 mt-20`
  const Button = tw.button`border bg-blue-400 text-center text-white p-3 rounded-full`
  const Description = tw.h1`text-lg`
  const Images = tw.img`md:min-w-[500px] min-w-full`
  const Info = tw.div` basis-1/2 space-y-8`
  return (
    <Div>
      <Images src={Choose} alt="about image" />
      <Info>
        <Button className="border bg-blue-400 text-center text-white p-3 rounded-full">
          Why Choose Us?
        </Button>
        <Description> Vision + Hard work + Consistency</Description>
        <Description>
          At Trendsoft Quality is our ultimate business plan. We consider every
          aspect which matters to clients' data security and intellectual
          property protections. We believe that transparency is needed to create
          trust, and so it is integral part or Trendsoft culture. It gives us
          utmost confidence to provide a visibility regarding the development
          process to the clients. Being your technology partner, we make sure to
          deliver right combination of technologies for your need and excellent
          result of it.
        </Description>
      </Info>
    </Div>
  )
}
export default ChooseUs
