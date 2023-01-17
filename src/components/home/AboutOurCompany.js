import { Link } from "gatsby"
import React from "react"
import {
  AboutOur,
  AboutOurInfo,
  AboutOurImage,
  AboutOurTitle,
  AboutOurSubTitle,
  AboutOurDotImage,
  Title,
} from "./HomeStyle"

const AboutOurCompany = props => {
  return (
    <AboutOur>
      <img
        src={props.aboutOurCompany.img}
        alt=""
        width="500px"
        height="508px"
      />
      <AboutOurInfo>
        {/* <AboutOurDotImage>
          <AboutOurImage src={props.aboutOurCompany.imgDot} alt="" />
        </AboutOurDotImage>
        <AboutOurTitle>{props.aboutOurCompany.title}</AboutOurTitle> */}

        <Title>{props.aboutOurCompany.header}</Title>

        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{
            __html: props.aboutOurCompany.description,
          }}
        />

        <div className="pt-5">
          <Link
            to="/about/"
            aria-label="About Our Company Learn More"
            className="bg-blue-600  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]"
          >
            {props.aboutOurCompany.CTA}
          </Link>
        </div>
      </AboutOurInfo>
    </AboutOur>
  )
}

export default AboutOurCompany
