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
  console.log(props.data)

  return (
    <FooterDiv id="footer" role="contentinfo">
      <div className="md:flex  justify-between sm:grid  1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4   md:space-y-0 space-y-12 md:space-x-6    my-10 mt-8 ">
        <div className="w-[30%] grid gap-8">
          <FooterTrendInfo>
            <Link to="/">
              <img
                src={props.data.logo}
                className="h-[66px]"
                alt={props.data.alt}
              />
            </Link>
          </FooterTrendInfo>

          {/* contact */}
          <FooterInfoDiv>
            <FooterTitle id={props.data.contactName}>
              {props.data.contactTitle}
            </FooterTitle>
            <ul aria-labelledby={props.data.contactName}>
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

              <FooterIconInfo>
                <IconSize>
                  <SlLocationPin />
                </IconSize>

                <div>
                  <a
                    aria-label="location: Trendsoft Technologies Pvt. Ltd,
                    2nd floor, trend soft, Ratnalacheruvu Rd, <br/> near tech park, Mangalagiri, Atmakur Rural,
                    <br/> Andhra Pradesh 522503"
                    href="https://www.google.com/maps/place/Trendsoft+Technologies+Pvt+Ltd/@16.422711,80.577043,271m/data=!3m1!1e3!4m16!1m9!3m8!1s0x3a35f154bff9fd17:0x440006bb3f58773a!2sTrendsoft+Technologies+Pvt+Ltd!8m2!3d16.4227236!4d80.5769706!9m1!1b1!16s%2Fg%2F11h7ftj8x3!3m5!1s0x3a35f154bff9fd17:0x440006bb3f58773a!8m2!3d16.4227236!4d80.5769706!16s%2Fg%2F11h7ftj8x3?hl=en&entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:p-[1px]"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: props.data.local }}
                    />
                  </a>
                </div>
              </FooterIconInfo>
            </ul>
          </FooterInfoDiv>
        </div>

        <div className=" grid gap-2">
          {/* services */}
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

          {/* Accessibility */}
          <FooterInfoDiv>
            <FooterTitle id={props.data.AccessibilityTitle}>
              {props.data.AccessibilityTitle}
            </FooterTitle>
            <ul
              className="space-y-2"
              aria-labelledby={props.data.AccessibilityTitle}
            >
              {props.data.Accessibility?.map((item, idx) => (
                <li key={item.listItem.id}>
                  <Link to={item.listItem.page} className="focus:p-[1px]">
                    {item.listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterInfoDiv>
        </div>

        <div className="space-y-8">
          {/* testing */}
          <FooterInfoDiv>
            <FooterTitle id={props.data.TestingTitle}>
              {props.data.TestingTitle}
            </FooterTitle>
            <ul className="space-y-2" aria-labelledby={props.data.TestingTitle}>
              {props.data.Testing?.map((item, idx) => (
                <li key={item.listItem.id}>
                  <Link to={item.listItem.page} className="focus:p-[1px]">
                    {item.listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterInfoDiv>

          {/* design */}
          <FooterInfoDiv>
            <FooterTitle id={props.data.DesigningTitle}>
              {props.data.DesigningTitle}
            </FooterTitle>
            <ul
              className="space-y-2"
              aria-labelledby={props.data.DesigningTitle}
            >
              {props.data.Designing?.map((item, idx) => (
                <li key={item.listItem.id}>
                  <Link to={item.listItem.page} className="focus:p-[1px]">
                    {item.listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterInfoDiv>
        </div>

        <div className=" grid gap-2">
          {/* pages */}
          <FooterInfoDiv>
            <FooterTitle id={props.data.PagesTitle}>
              {props.data.PagesTitle}
            </FooterTitle>
            <ul className="space-y-2" aria-labelledby={props.data.PagesTitle}>
              {props.data.Pages?.map((item, idx) => (
                <li key={item.listItem.id}>
                  <Link to={item.listItem.page} className="focus:p-[1px]">
                    {item.listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterInfoDiv>

          {/* dgm */}
          <FooterInfoDiv>
            <FooterTitle id={props.data.DgmTitle}>
              {props.data.DgmTitle}
            </FooterTitle>
            <ul className="space-y-2" aria-labelledby={props.data.DgmTitle}>
              {props.data.DigitalMarketing?.map((item, idx) => (
                <li key={item.listItem.id}>
                  <Link to={item.listItem.page} className="focus:p-[1px]">
                    {item.listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterInfoDiv>
        </div>
      </div>

      <div className="grid justify-items-center mb-4">
        <FooterIconLogo>
          <h2 className=" mt-1 mr-5" id="FollowUs">
            Follow Us
          </h2>
          <ul aria-labelledby="FollowUs" className="flex gap-2 text-start ">
            <li>
              <a
                href={props.data.facebookLink}
                aria-label="Facebook trendsofttech page "
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
                aria-label="Linkedin trendsofttech page "
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
                aria-label="Instagram trendsofttech page "
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

      <FooterHr />
      <p className="text-center mt-4">{props.data.reserved}.</p>
    </FooterDiv>
  )
}

export default Footer
