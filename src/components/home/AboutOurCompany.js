import React from "react"
import tw from "twin.macro"

const AboutOurCompany = props => {
  const Div = tw.div`lg:flex grid mt-24 2xl:space-x-60 xl:space-x-40 lg:space-x-28 md:space-y-20 space-y-10  justify-center 2xl:px-48 lg:px-20 md:px-20  px-8 `
  const H2 = tw.h2`2xl:text-xl lg:text-xl text-sm sm:text-lg font-bold  text-blue-500`
  const H1 = tw.h1`text-[16px] from-neutral-400`
  const Button = tw.button`bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]`
  const Description = tw.h6`2xl:text-[36px] lg:text-[36px] md:text-[36px] text-[22px] font-bold`
  const ImgeDiv = tw.div`absolute 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-24  left-20 2xl:-top-3 xl:-top-3 lg:top-2 md:-top-3 sm:-top-7  top-0`
  const Image = tw.img`2xl:w-[500px] xl:w-[500px] lg:w-[280px]`
  const InfoDiv = tw.div`space-y-5 relative`
  return (
    <Div
    // data-sal="fade"
    // data-sal-delay="50"
    // data-sal-easing="ease-in-out"
    // className=""
    >
      <img src={props.aboutOurCompany.img} alt="retget" />

      <InfoDiv>
        <ImgeDiv>
          <Image src={props.aboutOurCompany.imgDot} alt="aboutUs Image" />
        </ImgeDiv>
        <H2 className="">{props.aboutOurCompany.title}</H2>

        <Description>{props.aboutOurCompany.header}</Description>

        <H1>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: props.aboutOurCompany.description,
            }}
          />
        </H1>
        <Button>{props.aboutOurCompany.CTA}</Button>
      </InfoDiv>
    </Div>
  )
}

export default AboutOurCompany
