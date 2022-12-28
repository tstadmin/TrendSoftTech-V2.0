import { Link } from "gatsby"
import React from "react"

import bannerImage from "../../../static/img/HomeImages/banner.svg"
import {
  BannerDiv,
  BannerInfoDiv,
  BannerSubTitle,
  BannerTitle,
  BannerButton,
  BannerImageDiv,
  BannerImage,
} from "./HomeStyle"
const Banner = props => {
  return (
    <BannerDiv>
      <BannerInfoDiv>
        <BannerTitle>
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </BannerTitle>

        <BannerSubTitle>{props.banner.title}</BannerSubTitle>

        <BannerButton>
          {" "}
          <Link to="/contact/">{props.banner.CTA}</Link>
        </BannerButton>
      </BannerInfoDiv>

      <BannerImageDiv>
        <BannerImage src={bannerImage} alt="bannerImage" />
      </BannerImageDiv>
    </BannerDiv>
  )
}

export default Banner
