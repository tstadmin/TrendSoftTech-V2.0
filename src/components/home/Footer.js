import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineMail } from "react-icons/ai"
import { MdOutlineAttachEmail } from "react-icons/md"

import { BiLink } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"

import {
  FooterDiv,
  FooterTitle,
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
    <FooterDiv id="footer" role="contentinfo">
      <div className="md:flex sm:grid  1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4   md:space-y-0 space-y-12 md:space-x-6   sm:justify-between my-10 mt-8 ">
        <FooterTrendInfo>
          <Link to="/">
            <img src={props.data.logo} className="h-32" alt={props.data.alt} />
          </Link>

          <p>{props.data.description}</p>
          <div className="">
            <FooterIconLogo>
              <h2 className=" mt-1 mr-5" id="FollowUs">
                Follow Us
              </h2>
              <ul aria-labelledby="FollowUs" className="flex gap-2 text-start ">
                <li>
                  <a
                    href={props.data.facebookLink}
                    aria-label="Follow us on facebook: trendsoft tech page "
                    target="_blank"
                    rel="noreferrer"
                    className="focus:text-white focus:rounded-full  "
                  >
                    <div className="text-blue-500 text-center hover:text-white  shadow-black/50 border-black/10  bg-white focus:bg-blue-600 hover:cursor-pointer hover:bg-blue-600  rounded-full w-9 h-9 p-[10px] shadow-xl">
                      <FaFacebookF />
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={props.data.linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow us on Linkedin: trendsoft tech page "
                    className=" focus:rounded-full"
                  >
                    <FooterIconStyles>
                      <TiSocialLinkedin className="text-xl" />
                    </FooterIconStyles>
                  </a>
                </li>

                <li>
                  <a
                    href={props.data.instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow us on Instagram: trendsoft tech page "
                    className="focus:rounded-full"
                  >
                    <FooterIconStyles>
                      <AiOutlineInstagram className="text-xl" />
                    </FooterIconStyles>
                  </a>
                </li>
              </ul>
            </FooterIconLogo>
          </div>
        </FooterTrendInfo>

        <FooterInfoDiv>
          <FooterTitle id={props.data.itTitle}>
            {props.data.itTitle}
          </FooterTitle>
          <ul className="space-y-2" aria-labelledby={props.data.itTitle}>
            {props.data.itService?.map((item, idx) => (
              <li key={item.listItem.id}>
                <Link to={item.listItem.page} className="focus:p-[1px]">
                  {item.listItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </FooterInfoDiv>

        <FooterInfoDiv>
          <FooterTitle id={props.data.contactName}>
            {props.data.contactTitle}
          </FooterTitle>
          <ul aria-labelledby={props.data.contactName}>
            <FooterIconInfo>
              <IconSize>
                <SlLocationPin />
              </IconSize>

              <div>
                <a
                  aria-label="location: Trendsoft Technologies Pvt. Ltd,
                MIG-37 Vasavi Srinivasam Apartment Flat Number.301 3rd Floor KPHB Colony Road Number.1 Kukatpally Hyderabad-500072"
                  href="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:p-[1px]"
                >
                  <div dangerouslySetInnerHTML={{ __html: props.data.local }} />
                </a>
              </div>
            </FooterIconInfo>

            <FooterIconInfo>
              <IconSize>
                <AiOutlineMail />
              </IconSize>

              <div>
                <a
                  className="focus:p-[1px]"
                  href="mailto:info@trendsofttech.com"
                  aria-label="company mail: info@trendsofttech.com"
                >
                  {props.data.mail}
                </a>
              </div>
            </FooterIconInfo>

            <FooterIconInfo>
              <IconSize>
                <MdOutlineAttachEmail />
              </IconSize>
              <div>
                <a
                  href="mailto:bdm.ts@trendsofttech.com"
                  aria-label="Business Inquries mail: bdm.ts@trendsofttech.com "
                  className="focus:p-[1px]"
                >
                  {props.data.serviceMail}
                </a>
              </div>
            </FooterIconInfo>

            <FooterIconInfo>
              <IconSize>
                <BiLink />
              </IconSize>

              <div>
                <Link
                  to="/"
                  aria-label="Trendsofttech link"
                  className="focus:p-[1px]"
                >
                  {props.data.website}
                </Link>
              </div>
            </FooterIconInfo>
          </ul>
        </FooterInfoDiv>
      </div>

      <FooterHr />
      <p className="text-center">{props.data.reserved}.</p>
    </FooterDiv>
  )
}

export default Footer
