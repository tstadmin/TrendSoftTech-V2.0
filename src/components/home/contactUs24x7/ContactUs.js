import { Link } from "gatsby"
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
        <ContactDescription>{props.contactUs.description}</ContactDescription>

        <Button>
          <Link to="/contact/">{props.contactUs.CTA}</Link>
        </Button>
      </ContactInfo>
    </Contact>
  )
}

export default ContactUs
