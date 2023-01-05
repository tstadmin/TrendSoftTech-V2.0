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
        <Link to="/about/">
          <Button>{props.aboutOurCompany.CTA}</Button>
        </Link>
      </AboutOurInfo>
    </AboutOur>
  )
}

export default AboutOurCompany
