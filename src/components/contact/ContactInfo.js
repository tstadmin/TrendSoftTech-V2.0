import { Link } from "gatsby"
import React from "react"
import {
  ContactInfoDiv,
  Image,
  ContactTitle,
  EmailInfo,
  Info,
  AdderssInfo,
} from "./Contactstyled"
const ContactInfo = props => {
  return (
    <ContactInfoDiv>
      <Info>
        <Image src={props.data.emailimg} alt={props.data.altEmail} />
        <EmailInfo>
          <p> {props.data.emailTitle}</p>
          <Link to="service@trendsofttech.com">
            <p>{props.data.email} </p>
          </Link>
          <h2>{props.data.businessMailTitle} </h2>
          <Link to="service@trendsofttech.com">
            <p>{props.data.businessEmail} </p>
          </Link>
        </EmailInfo>
      </Info>
      <Info>
        <Image src={props.data.addressimg} alt={props.data.altAddress} />
        <AdderssInfo>
          <h2>{props.data.addressOne} </h2>
          <Link
            to="https://www.google.com/maps/place/MIG-37,+K+P+H+B+Phase+1,+Kukatpally,+Hyderabad,+Telangana+500072/@17.4911187,78.4019202,21z/data=!4m5!3m4!1s0x3bcb91949a17dd21:0x9bb114860820bc25!8m2!3d17.4910755!4d78.4019303"
            target="_blank"
          >
            <p>{props.data.addressOneInfo}</p>
          </Link>
          <h2>{props.data.addressTwo} </h2>
          <Link to="https://goo.gl/maps/rFv1H2FcnZuejCss6" target="_blank">
            <p>{props.data.addressTwoInfo}</p>
          </Link>
        </AdderssInfo>
      </Info>
    </ContactInfoDiv>
  )
}

export default ContactInfo
