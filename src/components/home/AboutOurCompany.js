import { Link } from "gatsby"
import React from "react"

import {
  AboutOur,
  AboutOurInfo,
  AboutOurImage,
  AboutOurH2,
  Description,
  Button,
  AboutOurDescription,
  AboutOurDotImage,
} from "./HomeStyle"

const AboutOurCompany = props => {
  return (
    <AboutOur>
      <img src={props.aboutOurCompany.img} alt="retget" />
      <AboutOurInfo>
        <AboutOurDotImage>
          <AboutOurImage
            src={props.aboutOurCompany.imgDot}
            alt="aboutUs Image"
          />
        </AboutOurDotImage>
        <AboutOurH2>{props.aboutOurCompany.title}</AboutOurH2>

        <AboutOurDescription>
          {props.aboutOurCompany.header}
        </AboutOurDescription>

        <Description>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: props.aboutOurCompany.description,
            }}
          />
        </Description>
        <Link to="/about/">
          <Button>{props.aboutOurCompany.CTA}</Button>
        </Link>
      </AboutOurInfo>
    </AboutOur>
  )
}

export default AboutOurCompany
