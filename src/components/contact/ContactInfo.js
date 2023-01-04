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
          <h2>{props.data.emailTitle} </h2>
          <p>{props.data.email} </p>

          <h2>{props.data.businessMailTitle} </h2>
          <p>{props.data.businessEmail} </p>
        </EmailInfo>
      </Info>
      <Info>
        <Image src={props.data.addressimg} alt={props.data.altAddress} />
        <AdderssInfo>
          <h2>{props.data.addressOne} </h2>
          <p>{props.data.addressOneInfo}</p>

          <h2>{props.data.addressTwo} </h2>
          <p>{props.data.addressTwoInfo}</p>
        </AdderssInfo>
      </Info>
    </ContactInfoDiv>
  )
}

export default ContactInfo
