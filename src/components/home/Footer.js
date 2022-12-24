import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineMail } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import logo from "../../../static/img/HomeImages/trendsoftlogo.svg"
import {
  Description,
  Foote,
  FooterTitle,
  FooterInfo,
  FooterInfoDiv,
  FooterTrendInfo,
  FooterHr,
  FooterIconInfo,
  FooterIconLogo,
  FooterIconStyles,
  FooterUi,
  IconSize,
} from "./HomeStyle"

const Footer = () => {
  return (
    <Foote>
      <hr />
      <FooterInfo>
        <FooterTrendInfo>
          <img src={logo} className="h-32" alt="logo" />
          <Description>
            At Trendsoft Quality is our ultimate business plan. We consider
            every aspect which matters to clients' data security and
            intellectual property protections.
          </Description>
          <FooterIconLogo>
            <FooterIconStyles>
              <FaFacebookF />
            </FooterIconStyles>
            <FooterIconStyles>
              <TiSocialLinkedin />
            </FooterIconStyles>
          </FooterIconLogo>
        </FooterTrendInfo>
        <FooterInfoDiv>
          <FooterTitle>IT Services</FooterTitle>
          <ul>
            <FooterUi>
              <li>Web Development</li>
              <li>Ecommerce Development</li>
              <li>Product Development</li>
              <li>Mobile Development</li>
              <li>Digital Marketing</li>
              <li>Ui/UX Design</li>
            </FooterUi>
          </ul>
        </FooterInfoDiv>

        <FooterInfoDiv>
          <FooterTitle>Contact Info</FooterTitle>

          <FooterIconInfo>
            <IconSize>
              <SlLocationPin />
            </IconSize>

            <Description>
              Trendsoft Technologies Pvt. Ltd,Flat #302, 2nd Floor, PKR
              Complex,Road No. 1, KPHB Colony, Kukatpally, Hyderabad – 500072
            </Description>
          </FooterIconInfo>

          <FooterIconInfo>
            <IconSize>
              <AiOutlineMail />
            </IconSize>

            <Description>
              info@trendsofttech.com
              <br /> service@trendsofttech.com
            </Description>
          </FooterIconInfo>

          <FooterIconInfo>
            <IconSize>
              <BiLink />
            </IconSize>

            <Description>www.trendsofttech.com</Description>
          </FooterIconInfo>
        </FooterInfoDiv>
      </FooterInfo>

      <FooterHr />
      <h1 className="text-center">© 2022 All Rights Reserved.</h1>
    </Foote>
  )
}

export default Footer
