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
      <div className="bg-blue-100 xl:flex grid  xl:items-center justify-items-center rounded-2xl">
        <img src={props.contactUs.personsImage} alt="" width="632px" />

        <ContactInfo>
          <h3>{props.contactUs.title}</h3>
          <ContactDescription>{props.contactUs.description}</ContactDescription>

          <Button>
            <Link to="/contact/">{props.contactUs.CTA}</Link>
          </Button>
        </ContactInfo>
      </div>
    </Contact>
  )
}

export default ContactUs
