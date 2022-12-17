import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineMail } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import logo from "../../../static/img/trendsoftlogo.svg"
import tw from "twin.macro"
const Footer = () => {
  const Description = tw.p`text-[16px] font-[400]`
  const Title = tw.p`text-[34px]   font-semibold text-blue-600`
  const Icon = tw.div`flex mt-4 gap-5`
  const Hr = tw.hr`border-black border`
  const WebLink = tw.h1`flex gap-2 text-start`
  const WebMail = tw.h1`flex gap-2 text-start`
  const Address = tw.h1`flex gap-2 text-start`
  const FaceBookIcon = tw.h1` text-blue-500 text-center hover:text-white  bg-white hover:cursor-pointer hover:bg-blue-600 rounded-full w-9 h-9 p-2 shadow-xl`
  const Footer = tw.div`md:flex sm:grid px-8 xl:px-12 md:px-0 md:space-y-0 space-y-12 md:space-x-6 lg:justify-center md:justify-center sm:justify-center my-20`
  const TrendInfo = tw.div` basis-1/3`
  const ServicesInfo = tw.div`space-y-3 basis-1/4`
  const ContactInfo = tw.div`space-y-3  basis-1/4`
  const Iconinfo = tw.div`text-2xl`
  const Ul = tw.div` space-y-3 text-[16px] font-[400]`

  return (
    <div>
      <Footer>
        <TrendInfo>
          <img src={logo} className="h-32" />
          <Description>
            At Trendsoft Quality is our ultimate business plan. We consider
            every aspect which matters to clients' data security and
            intellectual property protections.
          </Description>
          <Icon>
            <FaceBookIcon>
              <FaFacebookF />
            </FaceBookIcon>
            <FaceBookIcon>
              <TiSocialLinkedin />
            </FaceBookIcon>
          </Icon>
        </TrendInfo>
        <ServicesInfo>
          <Title>IT Services</Title>

          <ul>
            <Ul>
              <li>Web Development</li>
              <li>Ecommerce Development</li>
              <li>Product Development</li>
              <li>Mobile Development</li>
              <li>Digital Marketing</li>
              <li>Ui/UX Design</li>
            </Ul>
          </ul>
        </ServicesInfo>

        <ContactInfo>
          <Title>Contact Info</Title>

          <Address>
            <Iconinfo>
              <SlLocationPin />
            </Iconinfo>

            <Description>
              Trendsoft Technologies Pvt. Ltd,Flat #302, 2nd Floor, PKR
              Complex,Road No. 1, KPHB Colony, Kukatpally, Hyderabad – 500072
            </Description>
          </Address>

          <WebMail>
            <Iconinfo>
              <AiOutlineMail />
            </Iconinfo>

            <Description>
              info@trendsofttech.com
              <br /> service@trendsofttech.com
            </Description>
          </WebMail>

          <WebLink>
            <Iconinfo>
              <BiLink />
            </Iconinfo>

            <Description>www.trendsofttech.com</Description>
          </WebLink>
        </ContactInfo>
      </Footer>

      <Hr />
      <h1 className="text-center">© 2022 All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
