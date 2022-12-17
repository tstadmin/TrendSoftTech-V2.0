import React from "react"
import tw from "twin.macro"

const AboutOurCompany = props => {
  // const Div = tw.div`lg:flex grid mt-24
  //       2xl:space-x-60 xl:space-x-40 lg:space-x-28 md:space-y-20 540Screen:space-y-20
  //       440Screen:space-y-0 340Screen:space-y-10  justify-center 2xl:px-48 lg:px-20 md:px-20 340Screen:px-10 px-5 `
  //const H2 = tw.h2`2xl:text-xl lg:text-xl 340Screen:text-sm 440Screen:text-sm sm:text-lg font-bold  text-blue-500`
  const H1 = tw.h1`text-[16px] from-neutral-400`
  const Button = tw.button`bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]`
  return (
    <div
      className="lg:flex grid mt-24
      2xl:space-x-60 xl:space-x-40 lg:space-x-28 md:space-y-20 540Screen:space-y-20
      440Screen:space-y-0 340Screen:space-y-10  justify-center 2xl:px-48 lg:px-20 md:px-20 340Screen:px-10 px-5 "
    >
      <img src={props.aboutOurCompany.img} alt="retget" />

      <div className=" space-y-5 relative">
        <div
          className="absolute
           2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-24 440Screen:left-20 340Screen:left-20 left-24
           2xl:-top-3 xl:-top-3 lg:top-2 md:-top-3 sm:-top-7  540Screen:-top-2 440Screen:-top-1   340Screen:top-2 top-4"
        >
          <img
            className="2xl:w-[500px] xl:w-[500px] lg:w-[280px]  "
            src={props.aboutOurCompany.imgDot}
            alt=""
          />
        </div>
        <h2 className="2xl:text-xl lg:text-xl 340Screen:text-sm 440Screen:text-sm sm:text-lg font-bold  text-blue-500">
          {props.aboutOurCompany.title}
        </h2>

        <h1 className="2xl:text-[36px] lg:text-[36px] md:text-[36px] 540Screen:text-[26px] 440Screen:text-[20px] font-bold">
          {props.aboutOurCompany.header}
        </h1>

        <H1>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: props.aboutOurCompany.description,
            }}
          />
        </H1>
        <Button>{props.aboutOurCompany.CTA}</Button>
      </div>
    </div>
  )
}

export default AboutOurCompany
