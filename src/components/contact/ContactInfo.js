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
    <div>
      <ContactInfoDiv>
        <Info>
          <Image src={props.data.emailimg} />
          <EmailInfo>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {" "}
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
        <Info>
          <Image src={props.data.addressimg} />
          <AdderssInfo>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {props.data.addressOne}{" "}
            </p>
            <Link
              aria-label="Adderss 1: MIG-37, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072"
              to="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
              target="_blank"
            >
              {props.data.addressOneInfo}
            </Link>
            <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
              {props.data.addressTwo}{" "}
            </p>
            <Link
              aria-label="Adderss 2: #301-302 3rd Floor, NRT Techpark, Atmakur Rural, Andhra Pradesh 522503"
              to="https://goo.gl/maps/rFv1H2FcnZuejCss6"
              target="_blank"
            >
              {props.data.addressTwoInfo}
            </Link>
          </AdderssInfo>
        </Info>
      </ContactInfoDiv>
      <div className=" rounded-md mt-5 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.83395558414188!2d78.4019202!3d17.4911187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91949a17dd21%3A0x9bb114860820bc25!2sMIG-37%2C%20K%20P%20H%20B%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1680866173236!5m2!1sen!2sin"
          className="2xl:w-[500px] w-[100%] h-[280px] shadow-xl shadow-black/50"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactInfo
