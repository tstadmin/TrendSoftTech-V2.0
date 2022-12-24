import React from "react"
import {
  Button,
  Contact,
  ContactDescription,
  ContactHeader,
  ContactInfo,
} from "../HomeStyle.js"

const ContactUs = props => {
  return (
    <Contact>
      <img src={props.contactUs.personsImage} alt="banner img" />

      <ContactInfo>
        <ContactHeader>{props.contactUs.title}</ContactHeader>
        <ContactDescription>
          Have any idea or project for in your mind call us or schedule a
          appointment. Our representative will reply you shortly.
        </ContactDescription>
        <Button>Contact Us</Button>
      </ContactInfo>
    </Contact>
  )
}

export default ContactUs
