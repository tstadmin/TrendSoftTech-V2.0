import { Link } from "gatsby"
import React from "react"
import {
  AboutOur,
  AboutOurInfo,
  AboutOurImage,
  AboutOurTitle,
  Button,
  AboutOurSubTitle,
  AboutOurDotImage,
} from "./HomeStyle"

const AboutOurCompany = props => {
  return (
    <AboutOur>
      <img src={props.aboutOurCompany.img} alt={props.aboutOurCompany.alt} />
      <AboutOurInfo>
        <AboutOurDotImage>
          <AboutOurImage
            src={props.aboutOurCompany.imgDot}
            alt={props.aboutOurCompany.altDot}
          />
        </AboutOurDotImage>
        <AboutOurTitle>{props.aboutOurCompany.title}</AboutOurTitle>

        <AboutOurSubTitle>{props.aboutOurCompany.header}</AboutOurSubTitle>

        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: props.aboutOurCompany.description,
            }}
          />
        </p>

        <Link
          className="bg-blue-600  hover:bg-white font-medium border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]"
          to="/about/"
        >
          {props.aboutOurCompany.CTA}
        </Link>
      </AboutOurInfo>
    </AboutOur>
  )
}

export default AboutOurCompany
