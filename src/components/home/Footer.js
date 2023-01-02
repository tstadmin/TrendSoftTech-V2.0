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
            <img src={props.data.logo} className="h-32" alt="logo" />
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
          <FooterTitle>IT Services</FooterTitle>
          <ul>
            <FooterUi>
              {props.data.itService?.map((item, idx) => (
                <li
                  key={item.listItem.id}
                  className="hover:text-blue-400 font-serif"
                >
                  <Link to={item.listItem.page}>{item.listItem.title}</Link>
                </li>
              ))}
            </FooterUi>
          </ul>
        </FooterInfoDiv>

        <FooterInfoDiv>
          <FooterTitle>{props.data.contactTitle}</FooterTitle>

          <FooterIconInfo>
            <IconSize>
              <SlLocationPin />
            </IconSize>

            <Description>{props.data.local}</Description>
          </FooterIconInfo>

          <FooterIconInfo>
            <IconSize>
              <AiOutlineMail />
            </IconSize>

            <Description>
              <Link to="">
                <div dangerouslySetInnerHTML={{ __html: props.data.mail }} />{" "}
              </Link>
            </Description>
          </FooterIconInfo>
          <Link to="/">
            <FooterIconInfo>
              <IconSize>
                <BiLink />
              </IconSize>

              <Description>
                {" "}
                <div dangerouslySetInnerHTML={{ __html: props.data.website }} />
              </Description>
            </FooterIconInfo>
          </Link>
        </FooterInfoDiv>
      </FooterInfo>

      <FooterHr />
      <h1 className="text-center">{props.data.reserved}.</h1>
    </FooterDiv>
  )
}

export default Footer
