import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineMail } from "react-icons/ai"
import { BiLink } from "react-icons/bi"

import {
  Description,
  FooterDiv,
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
import { Link } from "gatsby"

const Footer = props => {
  return (
    <FooterDiv>
      <hr />
      <FooterInfo>
        <FooterTrendInfo>
          <Link to="/">
            <img src={props.data.logo} className="h-32" alt={props.data.alt} />
          </Link>

          <Description>{props.data.description}</Description>
          <FooterIconLogo>
            <a href={props.data.facebookLink} target="_blank" rel="noreferrer">
              <FooterIconStyles>
                <FaFacebookF />
              </FooterIconStyles>
            </a>

            <a href={props.data.linkedinLink} target="_blank" rel="noreferrer">
              <FooterIconStyles>
                <TiSocialLinkedin />
              </FooterIconStyles>
            </a>
          </FooterIconLogo>
        </FooterTrendInfo>
        <FooterInfoDiv>
          <FooterTitle>{props.data.itTitle}</FooterTitle>
          <ul>
            <FooterUi>
              {props.data.itService?.map((item, idx) => (
                <li
                  key={item.listItem.id}
                  className="hover:text-blue-400 font-Poppins"
                >
                  <Link to={item.listItem.page}>{item.listItem.title}</Link>
                </li>
              ))}
            </FooterUi>
          </ul>
        </FooterInfoDiv>

        <FooterInfoDiv>
          <FooterTitle>{props.data.contactTitle}</FooterTitle>
          <ul>
            <Link
              to="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
              target="_blank"
            >
              <FooterIconInfo>
                <IconSize>
                  <SlLocationPin />
                </IconSize>

                <Description>
                  <div dangerouslySetInnerHTML={{ __html: props.data.local }} />
                </Description>
              </FooterIconInfo>
            </Link>
            <Link to="service@trendsofttech.com">
              <FooterIconInfo>
                <IconSize>
                  <AiOutlineMail />
                </IconSize>

                <Description>
                  <div dangerouslySetInnerHTML={{ __html: props.data.mail }} />{" "}
                </Description>
              </FooterIconInfo>
            </Link>
            <Link to="/">
              <FooterIconInfo>
                <IconSize>
                  <BiLink />
                </IconSize>

                <Description>
                  <div
                    dangerouslySetInnerHTML={{ __html: props.data.website }}
                  />
                </Description>
              </FooterIconInfo>
            </Link>
          </ul>
        </FooterInfoDiv>
      </FooterInfo>

      <FooterHr />
      <p className="text-center">{props.data.reserved}.</p>
    </FooterDiv>
  )
}

export default Footer
