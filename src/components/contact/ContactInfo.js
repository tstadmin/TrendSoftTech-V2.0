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
          <ContactTitle>{props.data.emailTitle} </ContactTitle>
          <h1>{props.data.email} </h1>

          <ContactTitle>{props.data.businessMailTitle} </ContactTitle>
          <h1>{props.data.businessEmail} </h1>
        </EmailInfo>
      </Info>
      <Info>
        <Image src={props.data.addressimg} alt={props.data.altAddress} />
        <AdderssInfo>
          <ContactTitle>{props.data.addressOne} </ContactTitle>
          <h1>{props.data.addressOneInfo}</h1>

          <ContactTitle>{props.data.addressTwo} </ContactTitle>
          <h1>{props.data.addressTwoInfo}</h1>
        </AdderssInfo>
      </Info>
    </ContactInfoDiv>
  )
}

export default ContactInfo
