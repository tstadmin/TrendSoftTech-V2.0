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
    <ContactInfoDiv>
      <Info>
        <Image src={props.data.emailimg} />
        <EmailInfo>
          <p className="md:text-lg font-semibold text-sm">
            {" "}
            {props.data.emailTitle}
          </p>
          <a
            aria-label="Email service@trendsofttech.com "
            href="mailto:info@trendsofttech.com"
          >
            {props.data.email}
          </a>
          <p className="md:text-lg font-semibold text-sm">
            {props.data.businessMailTitle}{" "}
          </p>
          <a
            aria-label="Business Email service@trendsofttech.com "
            href="mailto:service@trendsofttech.com"
          >
            {props.data.businessEmail}
          </a>
        </EmailInfo>
      </Info>
      <Info>
        <Image src={props.data.addressimg} />
        <AdderssInfo>
          <p className="md:text-lg font-semibold text-sm">
            {props.data.addressOne}{" "}
          </p>
          <Link
            aria-label="Adderss 1 MIG-37, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072"
            to="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
            target="_blank"
          >
            {props.data.addressOneInfo}
          </Link>
          <p className="md:text-lg font-semibold text-sm">
            {props.data.addressTwo}{" "}
          </p>
          <Link
            aria-label="Adderss 2 #301-302 3rd Floor, NRT Techpark, Atmakur Rural, Andhra Pradesh 522503"
            to="https://goo.gl/maps/rFv1H2FcnZuejCss6"
            target="_blank"
          >
            {props.data.addressTwoInfo}
          </Link>
        </AdderssInfo>
      </Info>
    </ContactInfoDiv>
  )
}

export default ContactInfo
