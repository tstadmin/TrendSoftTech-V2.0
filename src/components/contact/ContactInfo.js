import { Link } from "gatsby"
import React from "react"
import {
  ContactInfoDiv,
  Image,
  EmailInfo,
  Info,
  AdderssInfo,
} from "./Contactstyled"
const ContactInfo = props => {
  return (
    <div className="">
      <ContactInfoDiv>
        <Info>
          <Image src={props.data.emailimg} />
          <EmailInfo>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {props.data.emailTitle}
            </p>
            <a
              aria-label="Email: service@trendsofttech.com "
              href="mailto:info@trendsofttech.com"
            >
              {props.data.email}
            </a>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {props.data.businessMailTitle}{" "}
            </p>
            <a
              aria-label="Business Email: service@trendsofttech.com "
              href="mailto:service@trendsofttech.com"
            >
              {props.data.businessEmail}
            </a>
          </EmailInfo>
        </Info>
        {/* <Info>
          <Image src={props.data.addressimg} />
          <AdderssInfo>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {props.data.addressOne}
            </p>
            <Link
              aria-label="Adderss 1: MIG-37, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072"
              to="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
              target="_blank"
            >
              {props.data.addressOneInfo}
            </Link>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {props.data.addressTwo}
            </p>
            <Link
              aria-label="Adderss 2: Unit No: 301-302 NRT Tech Park Mangalagiri Bypass Amaravati-522503"
              to="https://goo.gl/maps/rFv1H2FcnZuejCss6"
              target="_blank"
            >
              {props.data.addressTwoInfo}
            </Link>
          </AdderssInfo>
        </Info> */}
      </ContactInfoDiv>
      <div className="md:flex 2xl:justify-between  justify-around px-8 gap-7 mt-10">
        <div>
          <div>
            <p className="text-center text-white p-3 rounded-md  bg-blue-500">
              Hyderabad
            </p>
          </div>

          <div className=" rounded-md mt-5 border-2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.796120592011!2d78.401868!3d17.4910426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a0e9651d9b%3A0x25823406ac81f76a!2sTrendsoft%20Technologies%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1681133163369!5m2!1sen!2sin"
              // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d293.26660929450827!2d78.4019202!3d17.4911187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91949a17dd21%3A0x9bb114860820bc25!2sMIG-37%2C%20K%20P%20H%20B%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e1!3m2!1sen!2sin!4v1681128146833!5m2!1sen!2sin"
              className="2xl:w-[320px] md:w-[380px] w-[100%] h-[200px]  "
            ></iframe>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <div>
            <p className="text-center rounded-md  text-white p-3 bg-blue-900">
              {" "}
              Mangalagiri
            </p>
          </div>
          <div className="rounded-md  mt-5 border-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d294.9387316932675!2d80.5768317!3d16.4227811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f154bff9fd17%3A0x440006bb3f58773a!2sTrendsoft%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1681128206538!5m2!1sen!2sin"
              className="2xl:w-[320px] md:w-[380px] w-[100%] h-[200px]  "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
