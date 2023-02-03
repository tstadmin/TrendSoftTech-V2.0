import { Link } from "gatsby"
import React from "react"
import { AboutOur, AboutOurInfo, Title } from "./HomeStyle"

const AboutOurCompany = props => {
  return (
    <AboutOur>
      <img
        src={props.aboutOurCompany.img}
        alt=""
 
        className="rounded-md lg:w-[300px] lg:h-[300px] w-[400px] h-[400px] "
      
      />
      <AboutOurInfo>
     

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
            className="bg-[#0b2d78] focus:bg-white  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#1e6ff6] hover:duration-700  rounded-3xl p-3 text-white min-w-[122px] text-[16px]"
          >
            {props.aboutOurCompany.CTA}
          </Link>
        </div>
      </AboutOurInfo>
    </AboutOur>
  )
}

export default AboutOurCompany
