import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineMail } from "react-icons/ai"
import { MdOutlineAttachEmail } from "react-icons/md"

import { BiLink } from "react-icons/bi"

import {
  FooterDiv,
  FooterTitle,
  FooterInfo,
  FooterInfoDiv,
  FooterTrendInfo,
  FooterHr,
  FooterIconInfo,
  FooterIconLogo,
  FooterIconStyles,
  IconSize,
} from "./HomeStyle"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <FooterDiv id="footer" role="footer">
      <FooterInfo>
        <FooterTrendInfo>
          <Link to="/">
            <img src={props.data.logo} className="h-32" alt={props.data.alt} />
          </Link>

          <p>{props.data.description}</p>
          <FooterIconLogo>
            <a
              href={props.data.facebookLink}
              aria-label="facebook: trendsoft tech page "
              target="_blank"
              rel="noreferrer"
            >
              <FooterIconStyles>
                <FaFacebookF />
              </FooterIconStyles>
            </a>

            <a
              href={props.data.linkedinLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin: trendsoft tech page "
            >
              <FooterIconStyles>
                <TiSocialLinkedin />
              </FooterIconStyles>
            </a>
          </FooterIconLogo>
        </FooterTrendInfo>
        <FooterInfoDiv>
          <FooterTitle>{props.data.itTitle}</FooterTitle>
          <ul children=" space-y-3">
            {props.data.itService?.map((item, idx) => (
              <li key={item.listItem.id} className="hover:text-[#1273EB] ">
                <Link to={item.listItem.page}>{item.listItem.title}</Link>
              </li>
            ))}
          </ul>
          <p>
            <Link to="/about/">About</Link>
          </p>
        </FooterInfoDiv>

        <FooterInfoDiv>
          <FooterTitle>{props.data.contactTitle}</FooterTitle>
          <ul>
            <FooterIconInfo>
              <IconSize>
                <SlLocationPin />
              </IconSize>

              <li>
                <a
                  aria-label="location Trendsoft Technologies Pvt. Ltd,
                MIG-37 Vasavi Srinivasam Apartment Flat No.301 3rd Floor KPHB Colony Road No.1 Kukatpally Hyderabad-500072"
                  href="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div dangerouslySetInnerHTML={{ __html: props.data.local }} />
                </a>
              </li>
            </FooterIconInfo>

            <FooterIconInfo>
              <IconSize>
                <AiOutlineMail />
              </IconSize>

              <li>
                {" "}
                <a
                  href="mailto:info@trendsofttech.com"
                  aria-label="company mail info@trendsofttech.com "
                >
                  {props.data.mail}
                </a>
              </li>
            </FooterIconInfo>

            <FooterIconInfo>
              <IconSize>
                <MdOutlineAttachEmail />
              </IconSize>
              <li>
                <a
                  href="mailto:service@trendsofttech.com"
                  aria-label="service mail service@trendsofttech.com "
                >
                  {props.data.serviceMail}
                </a>
              </li>
            </FooterIconInfo>

            <FooterIconInfo>
              <IconSize>
                <BiLink />
              </IconSize>

              <li>
                <Link
                  to="/"
                  aria-label="websit link http://www.trendsofttech.com"
                >
                  {props.data.website}{" "}
                </Link>
              </li>
            </FooterIconInfo>
          </ul>
        </FooterInfoDiv>
      </FooterInfo>

      <FooterHr />
      <p className="text-center">{props.data.reserved}.</p>
    </FooterDiv>
  )
}

export default Footer
