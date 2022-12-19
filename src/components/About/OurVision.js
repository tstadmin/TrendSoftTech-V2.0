import React from "react"
import tw from "twin.macro"
import Vision from "../../../static/img/About/OurVision.svg"
const OurVision = () => {
  const Div = tw.div`lg:flex justify-center lg:space-x-5 space-y-10 xl:px-48 lg:px-20  px-12 mt-20`
  const Button = tw.button`border bg-blue-400 text-center text-white p-3 rounded-full`
  const Description = tw.h1`text-lg`
  const Image = tw.img`md:min-w-[500px] min-w-full `
  const Info = tw.div`space-y-5  mt-10`
  return (
    <Div>
      <Info>
        <Button>Our vision</Button>
        <Description>
          Our vision is to be the best in providing IT solutions and services
          with customer excellence and sound business practices.
        </Description>

        <Button>Our mission</Button>
        <Description>
          Our mission is to be a customer focus company, serving our business
          partners and clients to the best of our ability, while adding value to
          our clients’ businesses.
        </Description>
      </Info>

      <Image src={Vision} alt="about images" />
    </Div>
  )
}

export default OurVision
