import { Link } from "gatsby"
import React from "react"
import { AboutOurInfo, Title } from "./HomeStyle"

const AboutOurCompany = props => {
  return (
    <div className="lg:flex grid  mt-8 justify-center lg:gap-16 gap-6  1920Screen:px-48 2xl:px-24 md:px-12  px-8">
      <img
        src={props.aboutOurCompany.img}
        alt=""
        className="rounded-md lg:w-[400px] lg:h-[400px] w-[100%] md:h-[400px] sm:h-[250px] 340Screen:h-[200px] 240Screen:h-[170px] "
      />
      <AboutOurInfo>
        <Title>{props.aboutOurCompany.header}</Title>

        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{
            __html: props.aboutOurCompany.description,
          }}
        />

        <div className="flex space-x-7 pt-5">
          <Link
            to="/about/"
            aria-label="About Our Company Learn More"
            className="bg-[#0b2d78] focus:bg-white  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#3773f1] hover:duration-700  rounded-3xl p-3 text-white min-w-[122px] text-[16px]"
          >
            {props.aboutOurCompany.CTA}
          </Link>
          <a
            href="/pdf/trends.pdf"
            target="_blank"
            aria-label=" company brochure PDF "
            className="bg-[#0b2d78] focus:bg-white  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#3773f1] hover:duration-700  rounded-3xl p-3 text-white min-w-[122px] text-[16px]"
          >
            View Brochure
          </a>
        </div>
      </AboutOurInfo>
    </div>
  )
}

export default AboutOurCompany
