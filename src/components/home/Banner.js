import { Link } from "gatsby"
import React from "react"

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
    <BannerDiv id="header" role="banner">
      <BannerInfoDiv>
        <BannerTitle className="1920Screen:pl-20">
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </BannerTitle>

        <BannerSubTitle className="1920Screen:pl-20">
          {props.banner.title}
        </BannerSubTitle>
      </BannerInfoDiv>

      <BannerImageDiv>
        <BannerImage src={props.banner.image} alt={props.banner.alt} />
      </BannerImageDiv>
    </BannerDiv>
  )
}

export default Banner
