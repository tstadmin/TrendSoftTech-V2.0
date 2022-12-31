import React from "react"
import tw from "twin.macro"
import About from "../../../static/img/AboutImages/AboutUs.svg"
const AboutUs = () => {
  const Div = tw.div`lg:flex   justify-center lg:space-x-20 space-y-10 xl:px-48 lg:px-20  px-12 mt-20`
  const Button = tw.button`border  bg-black text-center text-white lg:p-3 p-1 rounded-full`
  const Description = tw.h1`text-lg font-serif`
  const Images = tw.img`md:min-w-[500px] min-w-full`
  const Info = tw.div` space-y-8`
  return (
    <Div>
      <Images src={About} alt="about image" />
      <Info>
        <Button>About Us</Button>
        <Description>
          Trendsoft Technologies is a Professional, Website and Mobile App
          Development Company that Endeavor on Highly Proficient, Intuitive and
           Cost-Effective Software solutions. Since our Inception, we have been
          helping companies across all the industries to achieve their Business
          Goals with Impactful, Business Centric Software Solutions.
        </Description>
        <Description>
          {" "}
          With our cutting-edge technologies, Agile Methodologies and in-depth
          industry knowledge, we support the Digital Transformation of our
          clients across all Business Verticals.
        </Description>
      </Info>
    </Div>
  )
}

export default AboutUs
