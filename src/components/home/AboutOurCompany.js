import { Link } from "gatsby"
import React from "react"
import { AboutOurInfo, Title } from "./HomeStyle"

const AboutOurCompany = props => {
  return (
    <div className="lg:flex grid  mt-8  lg:gap-16 gap-6  1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
      <img
        src={props.aboutOurCompany.img}
        alt=""
        className="rounded-md lg:w-[400px] lg:h-[400px] w-[100%] md:h-[400px] sm:h-[250px] 340Screen:h-[200px] 240Screen:h-[170px] "
      />
      <AboutOurInfo>
        <h1 className=" text-[#B8000C] md:text-2xl text-lg font-semibold">
          {props.aboutOurCompany.header}
        </h1>

        <div
          className="space-y-2 "
          dangerouslySetInnerHTML={{
            __html: props.aboutOurCompany.description,
          }}
        />

        <div className="flex space-x-7 pt-5">
          <Link
            to="/about/"
            aria-label="About Our Company Learn More"
            className="bg-[#0b2d78] hover:text-[#F9761F] focus:text-[#F9761F] font-medium  border-blue-400 border  rounded-3xl sm:p-3 p-2 text-center text-white min-w-[120px] text-[16px]"
          >
            {props.aboutOurCompany.CTA}
          </Link>
          <a
            href="/pdf/trends.pdf"
            target="_blank"
            aria-label=" company brochure PDF "
            className="bg-[#0b2d78] hover:text-[#F9761F] focus:text-[#F9761F]  font-medium  border-blue-400 border  rounded-3xl sm:p-3 p-2 text-center text-white min-w-[120px] text-[16px]"
          >
            View Brochure
          </a>
        </div>
      </AboutOurInfo>
    </div>
  )
}

export default AboutOurCompany
